import { Box, Button, Container, TextField } from "@mui/material";
import "./App.css";
import counterStore from "./stores/counterStore";
import CountBox from "./components/CountBox";
import { useState } from "react";

function App() {
  const { count, increase, increaseBy, decrease, decreaseBy, reset } =
    counterStore();

  const [customValue, setCustomValue] = useState("");

  const handleCustomIncrease = () => {
    increaseBy(+customValue);
  };

  const handleCustomDecrease = () => {
    decreaseBy(+customValue);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        border: "2px solid black",
        borderRadius: "1rem",
        p: 4,
      }}
    >
      <CountBox />
      <Box sx={{ display: "flex", gap: 4 }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={decrease}
            variant="contained"
            sx={{ backgroundColor: "#0d25ffff" }}
          >
            -1
          </Button>
          <Button
            onClick={() => decreaseBy(10)}
            variant="contained"
            sx={{ backgroundColor: "#5f6fffff" }}
          >
            -10
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={increase}
            variant="contained"
            sx={{ backgroundColor: "#ff0c0cff" }}
          >
            +1
          </Button>
          <Button
            onClick={() => increaseBy(10)}
            variant="contained"
            sx={{ backgroundColor: "#ff5f5fff" }}
          >
            +10
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <TextField
          type="number"
          value={customValue}
          onChange={(e) => setCustomValue(e.target.value)}
          onFocus={() => setCustomValue("")}
          placeholder="원하는 숫자 입력"
          size="small"
          sx={{ width: "150px" }}
        />
        <Button
          onClick={handleCustomDecrease}
          variant="contained"
          sx={{
            border: "2px solid #0d25ffff",
            backgroundColor: "white",
            color: "black",
          }}
        >
          -
        </Button>
        <Button
          onClick={handleCustomIncrease}
          variant="contained"
          sx={{
            fontWeight: "700",
            border: "2px solid #ff0c0cff",
            backgroundColor: "white",
            color: "black",
          }}
        >
          +
        </Button>
      </Box>
      <Button
        onClick={reset}
        variant="contained"
        sx={{
          backgroundColor: "black",
          fontWeight: "700",
        }}
      >
        reset
      </Button>
    </Container>
  );
}

export default App;
