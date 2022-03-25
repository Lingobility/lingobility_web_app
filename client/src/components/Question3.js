import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Question3() {
  

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
          Setup Question 1
        </Typography>
      </box>
      <Typography variant="h4" align="center">
        What language would you like to work on?  
      </Typography>

      <Box textAlign="center" mb={5} mt={5}>
        <Button
            variant="contained"
            size="large"
            href="/question2"
            // onClick={() =>
              
            //   alert("Submitted!")
            // }
          >
            English
        </Button>
        <Button
            variant="contained"
            size="large"
            onClick={() =>
              
              alert("Submitted!")
            }
            sx={{ml: 10}}
          >
            French
        </Button>
      </Box>
    </div>
  );
}

export default Question3;