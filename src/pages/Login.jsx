import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { Link as RouteLink } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assets/Oak.webp";
import { green } from "@mui/material/colors";
import { IconButton } from "@mui/material";
import Copyright from "../components/Copyright";
import Modal from "@mui/material/Modal";
import Backdrop from '@mui/material/Backdrop';
import { useState } from "react";
import axiosInstance from "../../axiosInstance";
import Swal from "sweetalert2";

const defaultTheme = createTheme();

export default function Login() {

  const [openModal, setOpenModal] = useState(false);
  const [emailForRecovery, setEmailForRecovery] = useState("");

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleEmailChange = (event) => {
    setEmailForRecovery(event.target.value);
  };

  const handlePasswordRecovery = () => {
    axiosInstance
      .get(`/api/user/recovery-pass/${emailForRecovery}`)
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se ha enviado un correo electronico",
          text: "Se espera confirmacion",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error al actualizar el usuario:", error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Correo no encontrado en el sistema",
          showConfirmButton: false,
          timer: 1500,
        });
      });

    handleCloseModal();
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://static.vecteezy.com/system/resources/previews/022/712/890/large_2x/sunlight-with-earth-sphere-crystal-or-sustainable-globe-glass-on-green-moss-nature-background-in-ecology-environment-forest-concept-of-tree-conservation-environmental-planet-eco-generat-ai-free-photo.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Typography component="h1" variant="h4" fontFamily={'VT323, monospace'}>
              Zeleny
            </Typography> */}
            <IconButton>
              <img src={logo} alt="" height={400} />
            </IconButton>
            <Typography
              component="h1"
              variant="h5"
              fontFamily={"VT323, monospace"}
            >
              Iniciar Sesion
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electronico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                component={RouteLink}
                to={"/"}
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: green[500],
                  "&:hover": { backgroundColor: green[900] },
                  fontFamily: "VT323, monospace",
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={handleOpenModal} // Abre el modal al hacer clic en el enlace
                  >
                    {"Recuperar contraseña"}
                  </Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Link href="#" variant="body2">
                    {"Tienes una cuenta? Registrate"}
                  </Link>
                </Grid>
              </Grid>

              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}

      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Recuperar contraseña
          </Typography>
          <TextField
            label="Correo Electrónico"
            fullWidth
            value={emailForRecovery}
            onChange={handleEmailChange}
          />
          <Button
            variant="contained"
            onClick={handlePasswordRecovery}
            sx={{ width: "100%", mt: 2 }}

          >
            Enviar correo de recuperación
          </Button>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}
