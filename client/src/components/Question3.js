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
          Setup Question 3
        </Typography>
      </box>
       <Typography variant="h4" align="center">
        How would you like to start? 
      </Typography>
      
      <Box textAlign="center" mb={5} mt={5}>
        <Button
            variant="contained"
            size="large"
            href="/presetwheel"
            // onClick={() =>
              
            //   alert("Submitted!")
            // }
          >
            Simple 
        </Button>
        <Button
            variant="contained"
            size="large"
            onClick={() =>
              
              alert("Submitted!")
            }
            sx={{ml: 10}}
          >
            Custom
        </Button>
      </Box>
      <Typography variant="body1" align="center">
         Simple: Start with a word list that we have prepared for you!
         <br></br>
         <br></br>
         Custom: Start by creating your own list of words that you want to learn!   
      </Typography>
    </div>
  );
}

export default Question3;