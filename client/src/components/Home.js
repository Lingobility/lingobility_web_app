import React, {useState} from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const wordList = ["apple", "banana", "cat", "dog", "elephant", "funny", "good", "happy", "ice", "jacket", "korea"];
const word = wordList[Math.floor(Math.random() * wordList.length)]



function Home() {
  console.log("word:", word)
  const [randomWord, setRandomWord] = useState("Lingobility");

  return (
    <div>
      <Typography
        variant="h3"
        align="center"
        style={{
          marginBottom: 100,
          color: "#7CA352",
          fontFamily: "Concert One",
        }}
      >
        Practice Words
      </Typography>
      <Box textAlign="center" mb={5}>
        <Button 
          variant="contained" 
          size="large"
          onClick={() => setRandomWord(wordList[Math.floor(Math.random() * wordList.length)])}
        > 
        
          Generate new word! 
        </Button>
      </Box>
      <Typography variant="body1" align="center">
        Your chosen word is {randomWord}! How well do you know this word??
      </Typography>
    </div>
  ); 
}
 
export default Home;
