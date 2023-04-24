import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { API } from "../../../api/API";
import { useForm } from "react-hook-form";
import { AuthResponse } from "../../models/response/AuthResponse";

const theme = createTheme();

enum FormInputs {
  phone = "phone",
  password = "password",
}

export default function SignIn() {
  async function login(
    number: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return API.post<AuthResponse>("/drivers/login", { number, password });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [user, setUser] = useState({
    phone: "",
    password: "",
  });

  const onSubmit = async (event: any) => {
    try {
      const res = await API.post("/drivers/login", event);

      localStorage.setItem("access", JSON.stringify(res.data.access));
      localStorage.setItem("refresh", JSON.stringify(res.data.refresh));

      navigate("/");
    } catch {
      console.log("error");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label="Номер телефона 996..."
              placeholder="996..."
              autoFocus
              {...register(FormInputs.phone, {
                required: "Это поле обязательное!",
              })}
              helperText={errors[FormInputs.phone]?.message as string}
              error={!!errors[FormInputs.phone]?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register(FormInputs.password, {
                required: "Это поле обязательное!",
              })}
              helperText={errors[FormInputs.password]?.message as string}
              error={!!errors[FormInputs.password]?.message}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  href="#"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  Забыли пароль?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="/registration"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  {"Создать новый аккаунт?"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
