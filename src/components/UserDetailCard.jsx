import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { green, red } from '@mui/material/colors';
import { Link as RouteLink } from 'react-router-dom';
import { Link } from '@mui/material';




const UserDetailsCard = ({ id ,name, lastname, email, phone, plan, createdAt, isAble }) => {
    
    const habilitadoColor = isAble ? green[800] : red[800];

    return (
        <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                <Typography color="text.secondary">Email: {email}</Typography>
                <Typography color="text.secondary">Teléfono: {phone}</Typography>
                <Typography color="text.secondary">Plan: {plan}</Typography>
                <Typography color="text.secondary">Fecha de Creación: {createdAt.toString()}</Typography>
                <Typography color="text.secondary" sx={{ color: habilitadoColor }}>Habilitado: {isAble ? 'Sí' : 'No'}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserDetailsCard;