import React, { useEffect, useState } from 'react';
import { Box, Container, CssBaseline, Grid, Toolbar, TextField, Select, MenuItem } from '@mui/material';
import UserDetailsCard from '../components/UserDetailCard';
import axiosInstance from '../../axiosInstance';
import { ThemeProvider } from '@emotion/react';
import colorsTheme from '../assets/colors';

export default function AllUserRequest() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [urlFilter, setUrlFilter] = useState('?state=');

    useEffect(() => {
        // Obtén la lista de usuarios desde el servidor con el filtro de la URL
        axiosInstance.get(`/api/all/users${urlFilter}`)
            .then((response) => {
                const userList = response.data;
                setUsers(userList);

                // Filtrar usuarios basados en el nombre
                const filteredResults = userList.filter((user) =>
                    user.name.toLowerCase().includes(filter.toLowerCase())
                );
                setFilteredUsers(filteredResults);
                console.log(filteredResults);
            })
            .catch((error) => {
                console.error('Error al obtener usuarios:', error);
            });
    }, [urlFilter, filter]);

    const formatDate = (date) => {
        // console.log(date); // Imprime la fecha sin formato
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };

        return new Date(date._seconds * 1000)
            .toLocaleString('es-ES', options);
    };

    const handleChange = (event) => {
        setUrlFilter(event.target.value);
    };

    const filterStateList = [
        { label: 'Todos', value: '?state=' },
        { label: 'Activos', value: '?state=true' },
        { label: 'Inactivos', value: '?state=false' },
    ];

    const handleFilterChange = (event) => {
        const inputValue = event.target.value;
        setFilter(inputValue);
    };

    const sortedUsers = filteredUsers.slice().sort((a, b) => {
        // Ordenar de manera descendente (del más reciente al más antiguo)
        return new Date(b.createdAt._seconds * 1000) - new Date(a.createdAt._seconds * 1000);
    });

    return (
        <Box sx={{ display: 'flex' }}>
            <ThemeProvider theme={colorsTheme}>
                <CssBaseline />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        overflow: 'auto',
                        mt: 10
                    }}
                >
                    <Toolbar>
                        <Box display={"flex"} flexDirection={"row"} gap={2} width={"100%"}>
                            <TextField
                                label="Filtrar por nombre"
                                variant="outlined"
                                value={filter}
                                onChange={handleFilterChange}
                                fullWidth
                            />
                            <Select
                                labelId="filterState"
                                id="filterState"
                                value={urlFilter}
                                label="Filtro"
                                onChange={handleChange}
                            >
                                {filterStateList.map((item, index) => (
                                    <MenuItem key={index} value={item.value}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Box>
                    </Toolbar>
                    <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
                        <Grid container spacing={3}>
                            {sortedUsers.map((user) => (
                                <Grid item key={user.id} xs={12} sm={6} md={3}>
                                    <UserDetailsCard
                                        id={user.id}
                                        name={user.name}
                                        lastname={user.lastname}
                                        email={user.email}
                                        phone={user.phone}
                                        plan={user.plan}
                                        createdAt={formatDate(user.createdAt)}
                                        isAble={user.isAble}
                                    />
                                    {console.log(formatDate(user.createdAt))}
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </ThemeProvider>
        </Box>
    );
}