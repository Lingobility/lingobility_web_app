import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";

const wordList = [
  "apple",
  "banana",
  "cat",
  "dog",
  "elephant",
  "funny",
  "good",
  "happy",
  "ice",
  "jacket",
  "korea",
];
const word = wordList[Math.floor(Math.random() * wordList.length)];

function addWord() {
  let x = document.getElementById("newWord").value;
  console.log(x);
  wordList.push(x)
  console.log(wordList)
  
}

function CustomWheel() {
  console.log("word:", word);
  const [randomWord, setRandomWord] = useState("Lingobility");

  return (
    <div>
      {console.log(wordList)}
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
          Custom Wheel
        </Typography>
      </box>
      <Typography variant="body1" align="center">
        Your current list of words are: {wordList.join(", ")}
      </Typography>
      <Box
        textAlign="center"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="newWord" label="New Word" variant="standard" />
      </Box>

      <Box textAlign="center" mb={5}>
        <Button variant="contained" size="large" onClick={() => addWord()}>
          Add new word!
        </Button>
      </Box>
    </div>
  );
}

export default CustomWheel;
