import React, { useEffect } from "react";
import CardDriver from "../driver-profile/Card";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchDriver } from "../../store/driver/action";
import { useDispatch } from "react-redux";
import { API } from "../../api/API";
import AppBarr from "../../components/appBar/AppBar";

const MainPage = () => {
  const dispatch = useDispatch();

  const drivers = useAppSelector((state) => state.driver.drivers);

  async function getDrivers() {
    try {
      const res = await API.get("/drivers");
      dispatch(fetchDriver(res.data));
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <div>
      <AppBarr />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {drivers.map((driver, i) => (
          <CardDriver driver={driver} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
