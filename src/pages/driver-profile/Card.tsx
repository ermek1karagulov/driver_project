import React from "react";
import arrow from "../../assets/arrow.svg";
import phone from "../../assets/phone.svg";
import watsapp from "../../assets/watsapp.svg";
import { IDriverModel } from "../../api/drivers.interfaces";
import { Link } from "react-router-dom";

interface IProps {
  driver: IDriverModel;
}

const CardDriver = ({ driver }: IProps) => {
  return (
    <div
      style={{
        width: "20rem",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "0.5rem",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderColor: "gray",
        borderRadius: "8px",
        background: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <img
          alt="сурот"
          src={driver.avatar}
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div style={{ fontSize: "25px", fontWeight: "700" }}>{driver.name}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          <span style={{ fontSize: "13px", color: "gray", fontWeight: "300" }}>
            Маршруты:ㅤ
          </span>
          {driver.cities.join(", ")}
        </div>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          <span style={{ fontSize: "13px", color: "gray", fontWeight: "300" }}>
            Машина: ㅤ
          </span>
          {driver.car}
        </div>
        <div
          style={{
            fontSize: "15px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{ fontSize: "13px", color: "gray", fontWeight: "300" }}
            >
              Телефон: ㅤ
            </span>
            {driver.phone}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "5px" }}>
              <Link to={driver.phone}>
                <img
                  src={phone}
                  alt=""
                  className="phoneSvg"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
            <div>
              <Link to={`https://wa.me/${driver.phone}`}>
                <img
                  src={watsapp}
                  alt=""
                  className="watsappSvg"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDriver;
