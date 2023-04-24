import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import API from "../../api/API";
import { Box, Button, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import MultipleSelect from "../../components/multipleSelectt/MultipleSelect";
import { cities } from "../../constants/cities";
import AvatarDrivers from "../../components/avatar/Avatar";

enum FormInputs {
  avatar = "avatar",
  phone = "phone",
  password = "password",
  name = "name",
  car = "car",
  cities = "cities",
}

const Profile = () => {
  const [avatar, setAvatar] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [route, setRoute] = useState("");
  const [driver, setDriver] = useState({
    avatar: "",
    phone: "",
    password: "",
    name: "",
    car: "",
    cities: [],
  });

  async function getDriverProfile() {
    try {
      const res = await API.get("/drivers/profile");
      setDriver(res.data);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    getDriverProfile();
  }, []);

  const onSubmit = async (event: any) => {
    console.log("event", event);
    event.avatar = "";
    try {
      const res = await API.patch("/drivers/register", event);
      localStorage.setItem("access", JSON.stringify(res.data.access));
      localStorage.setItem("refresh", JSON.stringify(res.data.refresh));
      navigate("/");
    } catch {
      console.log("error");
    }
  };

  return (
    <Box
      sx={{
        marginTop: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 0.1 }}
        >
          <Link to="/profile">
            <AvatarDrivers avatar={avatar} />
          </Link>
        </IconButton>
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
            Изменить фото профиля
          </Button>
        </label>

        <TextField
          id="standard-basic"
          label="Номер телефона"
          variant="standard"
          value={driver.phone}
          {...register(FormInputs.phone, {
            required: "Это поле обязательное!",
          })}
          helperText={errors[FormInputs.phone]?.message as string}
          error={!!errors[FormInputs.phone]?.message}
          onChange={(e) => setDriver({ ...driver, phone: e.target.value })}
        />
        <TextField
          id="standard-basic"
          label="Имя"
          variant="standard"
          value={driver.name}
          {...register(FormInputs.name, {
            required: "Это поле обязательное!",
          })}
          helperText={errors[FormInputs.name]?.message as string}
          error={!!errors[FormInputs.name]?.message}
          onChange={(e) => setDriver({ ...driver, name: e.target.value })}
        />
        <TextField
          id="standard-basic"
          label="Машина"
          variant="standard"
          value={driver.car}
          {...register(FormInputs.car, {
            required: "Это поле обязательное!",
          })}
          helperText={errors[FormInputs.car]?.message as string}
          error={!!errors[FormInputs.car]?.message}
          onChange={(e) => setDriver({ ...driver, car: e.target.value })}
        />
        <MultipleSelect
          value={
            driver.cities.map((item: string) => ({
              value: item,
              label: item,
            })) || []
          }
          // fullwidth
          // required
          options={cities}
          onChange={(e: any) => setRoute(e)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          Редактировать
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
