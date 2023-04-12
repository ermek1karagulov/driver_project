import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Select from "../../../components/select/Select";
import arrow from "../../../assets/arrow.svg";
import axios from "axios";
import { API } from "../../../api/API";

const theme = createTheme();

export default function SignIn() {
  const cities = [
    {
      name: "Osh",
      value: "Osh",
    },
    {
      name: "Bishkek",
      value: "Bishkek",
    },
    {
      name: "Джалал-Абад",
      value: "Джалал-Абад",
    },
    {
      name: "Ыссык-Кол",
      value: "Ыссык-Кол",
    },
    {
      name: "Наарын",
      value: "Наарын",
    },
    {
      name: "Талас",
      value: "Талас",
    },
    {
      name: "Баткен",
      value: "Баткен",
    },
  ];

  const [user, setUser] = useState({
    avatar: "",
    phone: "",
    password: "",
    name: "",
    car: "",
    route: { from: cities[0].name, to: cities[1].name },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post(API, user);
    } catch {
      console.log("error");
    }
  };

  // console.log(user);

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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <input
              accept="image/*"
              // className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={(e) => setUser({ ...user, avatar: e.target.value })}
            />
            <label htmlFor="raised-button-file">
              <Button
                style={{ width: "100%" }}
                variant="contained"
                component="span"
                // className={classes.button}
              >
                Добавить фото профиля
              </Button>
            </label>

            <TextField
              margin="normal"
              required
              fullWidth
              label="Номер телефона"
              autoFocus
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Имя"
              autoComplete="email"
              // autoFocus
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Машина"
              autoComplete="email"
              // autoFocus
              onChange={(e) => setUser({ ...user, car: e.target.value })}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "5px",
              }}
            >
              <Select
                defaultValue={user.route.from}
                styles={{
                  margin: 1,

                  // background: "red",
                  // width: "50%",
                  borderRadius: "5px",
                }}
                label="Город 1"
                options={cities}
                onChange={(v: string) =>
                  setUser({ ...user, route: { ...user.route, from: v } })
                }
              />
              <img src={arrow} alt="" />
              <Select
                defaultValue={user.route.to}
                styles={{
                  margin: 1,
                  // background: "blue",
                  // width: "50%",
                  borderRadius: "5px",
                }}
                label="Город 2"
                options={cities}
                onChange={(v: string) =>
                  setUser({ ...user, route: { ...user.route, to: v } })
                }
              />
            </div>

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
                <Link href="/login" variant="body2">
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
