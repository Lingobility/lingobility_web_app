import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";

function Question2() {
  return (
    <div>
      <Box>
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
          Setup Question 2
        </Typography>
      </Box>
      <Typography variant="h4" align="center">
        What difficulty?
      </Typography>

      <Box textAlign="center" >
        <FormControl sx={{mt: 10}}>
          <InputLabel id="demo-simple-select-helper-label">  Difficulty   </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            // value={age}
            label="Category"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Beginner</MenuItem>
            <MenuItem value={20}>Intermediate</MenuItem>
            <MenuItem value={30}>Advanced</MenuItem>
          
          </Select>
          <FormHelperText>
            Words displayed will change based on difficulty selected
          </FormHelperText>
        </FormControl>
      </Box>
      <Box textAlign="center" mb={5} mt={5}>
        <Button
          variant="contained"
          size="large"
          href="/question3"
          // onClick={() =>

          //   alert("Submitted!")
          // }
        >
          Submit
        </Button>
       
      </Box>
    </div>
  );
}

export default Question2;
