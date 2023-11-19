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
import PasswordField from '../components/PasswordField.jsx';
import { Grid, IconButton, Paper } from '@mui/material';
import colorsTheme from '../assets/colors.jsx';
import logo from "../assets/ZelenyLogo.png";

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
        <ThemeProvider theme={colorsTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            "url(https://cdn.chinadialogue.net/content/uploads/2022/01/18105302/Vegetal-city-Panorama-cropped.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
                    {/* sx={{backgroundColor:"black"}} */}
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                        }}
                    >

                        <IconButton>
                            <img src={logo} alt="" height={400} />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h5"
                        >
                            Recuperar Contraseña
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <PasswordField
                                name={"pass"}
                                label={"Nueva contraseña"}
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
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>

        //AAA OTRA WEA


    );
}