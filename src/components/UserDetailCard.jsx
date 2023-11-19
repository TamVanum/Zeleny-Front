import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { green, red } from '@mui/material/colors';
import { Link as RouteLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { useState } from 'react';
import { success, theme } from '../assets/colors';




const UserDetailsCard = ({ id, name, lastname, email, phone, plan, createdAt, isAble }) => {
    const [isHovered, setIsHovered] = useState(false);
    const habilitadoColor = isAble ? green[800] : red[800];

    return (
        <Card
            elevation={isHovered ? 4 : 1} // Cambia el elevation cuando está en hover
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
            sx={{
                p: 1,
                borderRadius: 5,
            }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
                <Typography variant="h5" component="div">
                    {name} {lastname}
                </Typography>
                <Link to={`/activateUserForm/${id}`} component={RouteLink} underline='none' color={'grey'}>
                    <IconButton color="primary">
                        <ManageAccountsIcon fontSize='large' sx={{ color: green[800] }} />
                    </IconButton>
                </Link>
            </CardContent>
            <CardContent>
                <Typography color={theme.text_default}>Email: {email}</Typography>
                <Typography color={theme.text_default}>Teléfono: {phone}</Typography>
                <Typography color={theme.text_default}>Plan: {plan}</Typography>
                <Typography color={theme.text_default}>Fecha de Creación: {createdAt.toString()}</Typography>
                <Typography color="text.secondary" sx={{ color: habilitadoColor }}>Habilitado: {isAble ? 'Sí' : 'No'}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserDetailsCard;