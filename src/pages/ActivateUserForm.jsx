import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import { Grid, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import { ThemeProvider } from '@emotion/react';
import colorsTheme from '../assets/colors';
import Swal from 'sweetalert2';

const ActivateUserForm = () => {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        // Obtén la lista de empresas desde el servidor
        axiosInstance.get(`/api/user/${userId}`)
            .then((response) => {
                const userData = response.data;
                setUser(userData);
            })
            .catch((error) => {
                console.error('Error al obtener usuarios:', error);
            });
    }, [userId]); // Agrega userId como dependencia para que useEffect se ejecute cuando cambie

    const formatDate = (date) => {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };

        return new Date(date?._seconds * 1000).toLocaleString('es-ES', options);
    };

    console.log(user);

    const handleActivate = () => {
        // Lógica para activar el usuario
        console.log('Usuario activado:', user);
    };


    const updateUser = (state) => {
        axiosInstance
          .put(`/api/update-state/user/${userId}`, {state: state})
          .then((response) => {
            console.log("Usuario actualizado con éxito:", response.data);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Usuario actualizado correctamente",
              showConfirmButton: false,
              timer: 1500,
            });
            setTimeout(() => {
                navigate(`/allUserRequest`);
            }, 1500);
          })
          .catch((error) => {
            console.error("Error al actualizar el usuario:", error);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "No se ha podido actualizar el usuario",
              showConfirmButton: false,
              timer: 1500,
            });
            setT
          });
      };
    

    return (
        <ThemeProvider theme={colorsTheme}>
            {user && (
                <Box>
                    <Paper sx={{ p: 3, mb: 2, mt: 10 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Nombre" value={user.name || ''} fullWidth disabled />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Apellido" value={user.lastname || ''} fullWidth disabled />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Email" value={user.email || ''} fullWidth disabled />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Teléfono" value={user.phone || ''} fullWidth disabled />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Plan" value={user.plan || ''} fullWidth disabled />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Fecha de Creación" value={formatDate(user.createdAt)} fullWidth disabled />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Habilitado" value={user.isAble ? 'Sí' : 'No'} fullWidth disabled />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={() => user.isAble ? updateUser(false) : updateUser(true)}
                            variant="contained"
                            color={user.isAble ? 'error' : 'success'}
                            fullWidth
                            sx={{ mt: 3 }}
                        >
                            {user.isAble ? 'Deshabilitar' : 'Activar'}
                        </Button>
                    </Paper>
                </Box>
            )}
        </ThemeProvider>
    );
};

export default ActivateUserForm;