import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import axiosInstance from "../../axiosInstance";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";

const defaultTheme = createTheme();

export default function ActivateUser() {
  const userId = useParams().userId;
  const handleSubmit = () => {
    axiosInstance
      .put(`/api/update/user/${userId}`)
      .then((response) => {
        console.log("Usuario actualizado con éxito:", response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuario actualizado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
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
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh" // Establece la altura de la caja para que llene la altura de la ventana
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Activar usuarios
        </Button>
      </Box>
    </ThemeProvider>
  );
}
