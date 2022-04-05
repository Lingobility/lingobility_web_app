import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function PresetWheel() {
  return (
    <div>
     
      <box>
        <Typography
          variant="h3"
          align="center"
          style={{
            marginTop: 100,
            marginBottom: 100,
            color: "#7CA352",
            fontFamily: "Concert One",
          }}
        >
          Wheel with pre-set words 
        </Typography>
      </box>
      <Typography variant="h4" align="center">
        Spin the wheel! 
      </Typography>
    </div>
  );
}

export default PresetWheel;
