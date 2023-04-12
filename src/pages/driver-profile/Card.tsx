import React from "react";
import arrow from "../../assets/arrow.svg";
import phone from "../../assets/phone.svg";
import watsapp from "../../assets/watsapp.svg";

const CardDriver: React.FC = () => {
  return (
    <div
      style={{
        width: "20rem",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        gap: "0.5rem",
        border: "2px solid",
        borderColor: "gray",
        borderRadius: "8px",
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
          alt="example"
          src="https://avatars.mds.yandex.net/i?id=58426ec99eef288b610022147c80c08f0cd4a9f1-6441755-images-thumbs&n=13"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div style={{ fontSize: "25px", fontWeight: "700" }}>
          Ermek Karagulov
        </div>
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
            Маршрут:ㅤ
          </span>
          Bishkek
          <img src={arrow} width="20px" height="15px" />
          Osh
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
          Toyota camry
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
            077777777
          </div>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <div style={{ marginRight: "5px" }}>
              <img src={phone} alt="" />
            </div>
            <div>
              <img src={watsapp} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDriver;
