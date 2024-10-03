import React, { useState } from "react";
import { Button } from "@mui/material";
import Image from "next/image";

const FormModal = ({
  table,
  type,
  data,
  id,
  name,
}: {
  table:
    | "invoice"
    | "admin"
    | "manager"
    | "users"
    | "user_profile"
    | "announcement"
    | "event";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
  name: string;
}) => {
  const buttonStyles = {
    create: {
      backgroundColor: "#4CAF50",
      color: "white",
    },
    update: {
      backgroundColor: "gray",
      color: "white",
    },
    delete: {
      backgroundColor: "red",
      color: "white",
    },
  };

  const buttonImages = {
    create: "/",
    update: "/",
    delete: "/",
  };

  const imageStyle = {
    marginRight: "8px",
  };

  const btnStyle = buttonStyles[type];
  const btnImageSrc = buttonImages[type];

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        style={{
          ...btnStyle,
          borderRadius: "10px",
          padding: "10px 20px",
          margin: "10px",
        }}
      >
        {btnImageSrc && (
          <Image
            src={btnImageSrc}
            alt={type}
            width={20}
            height={20}
            style={imageStyle}
          />
        )}
        {name}
      </Button>

      {open && (
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "50%",
            height: "50%",
            border: "1px solid blue",
            transform: "translate(-50%, -50%)",
            backgroundColor: "whitesmoke",
            color: "black",
            justifyContent: "center",
            alignItems: "center",
            opacity: "90%",
            borderRadius: "20px  ",
          }}
        >
          this is the modal that based on the button

          <button style={{ position:"absolute", top:"10%", right:"10%"}} onClick={()=>setOpen(false)} >X</button>
        </div>
      )}
    </>
  );
};

export default FormModal;
