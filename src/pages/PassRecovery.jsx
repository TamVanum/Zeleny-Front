import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from '../components/Copyright';
import { green } from '@mui/material/colors';
import axiosInstance from '../../axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import PasswordField from '../components/PasswordField';


const defaultTheme = createTheme();

export default function PassRecovery() {
    const userId = useParams().userId;
    const navigate = useNavigate();

    const [pass, setPass] = useState("");
    const [passValidation, setPassValidation] = useState("");

    const handlePassChange = (event) => {
        setPass(event.target.value);
        console.log(pass);
    };

    const handlePassValidationChange = (event) => {
        setPassValidation(event.target.value);
        console.log(passValidation);
    };


    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = () => {

        if (!pass) {
            Swal.fire({
                icon: 'error',
                title: 'Contraseña vacia',
                text: 'Por favor, ingrese una nueva contraseña.',
            });
            return;
        }

        if (!passValidation) {
            Swal.fire({
                icon: 'error',
                title: 'Validacion de ontraseña vacia',
                text: 'Por favor, ingrese la validacion de su contraseña',
            });
            return;
        }

        if (pass !== passValidation) {
            Swal.fire({
                icon: 'error',
                title: 'Contraseñas no coinciden',
                text: 'Las contraseñas ingresadas no coinciden',
            });
            return;
        }

        axiosInstance
            .put(`/api/update/password/${userId}`, { newPassword: pass })
            .then((response) => {
                console.log("Contraseña actualizada:", response.data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Contraseña actualizada correctamente",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            })
            .catch((error) => {
                console.error("Error al actualizar el usuario:", error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "No se ha podido actualizar contraseña",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, mt: 10, bgcolor: green[500] }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Recuperar contraseña
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <PasswordField
                            name={"pass"}
                            label={"Confirme contraseña"}
                            value={pass}
                            onChange={handlePassChange}
                            autoFocus={true}
                        />
                        <PasswordField
                            name={"passValidation"}
                            label={"Confirme contraseña"}
                            value={passValidation}
                            onChange={handlePassValidationChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3, mb: 2,
                                backgroundColor: green[500],
                                "&:hover": { backgroundColor: green[900] },
                            }}
                            onClick={handleSubmit}
                        >
                            Recuperar
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}