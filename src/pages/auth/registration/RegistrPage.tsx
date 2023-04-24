import React, { useEffect } from "react";
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
import { useState } from "react";
import { API } from "../../../api/API";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import MultipleSelect from "../../../components/multipleSelectt/MultipleSelect";
import { cities } from "../../../constants/cities";

const theme = createTheme();

enum FormInputs {
  avatar = "avatar",
  phone = "phone",
  password = "password",
  name = "name",
  car = "car",
  cities = "cities",
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [route, setRoute] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (event: any) => {
    console.log("event", { ...event, cities: route });
    event.avatar = "";
    try {
      const res = await API.post("/drivers/register", {
        ...event,
        cities: route,
      });
      localStorage.setItem("access", JSON.stringify(res.data.access));
      localStorage.setItem("refresh", JSON.stringify(res.data.refresh));
      navigate("/");
    } catch {
      console.log("error");
    }
  };

  console.log(route);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              {...register(FormInputs.avatar)}
            />
            <label htmlFor="raised-button-file">
              <Button
                style={{ width: "100%" }}
                variant="contained"
                component="span"
              >
                Добавить фото профиля
              </Button>
            </label>

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
            <TextField
              margin="normal"
              required
              fullWidth
              label="Имя"
              autoComplete="email"
              {...register(FormInputs.name, {
                required: "Это поле обязательное!",
              })}
              helperText={errors[FormInputs.car]?.message as string}
              error={!!errors[FormInputs.car]?.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Машина"
              autoComplete="email"
              {...register(FormInputs.car, {
                required: "Это поле обязательное!",
              })}
              helperText={errors[FormInputs.car]?.message as string}
              error={!!errors[FormInputs.car]?.message}
            />

            <MultipleSelect
              options={cities}
              onChange={(e: any) => setRoute(e)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Зарегестрироваться
            </Button>
            <Grid container style={{ marginBottom: "2rem" }}>
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  style={{ textDecoration: "none" }}
                >
                  {"У вас уже есть аккаунт? Войти"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
