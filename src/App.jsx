import { Box, Button, Container } from "@mui/material";
import "./App.css";
import counterStore from "./stores/counterStore";
import CountBox from "./components/CountBox";

function App() {
  const { count, increase, increaseBy, decrease, decreaseBy, reset } =
    counterStore();
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
      <Button
        onClick={reset}
        variant="contained"
        sx={{ backgroundColor: "black" }}
      >
        reset
      </Button>
    </Container>
  );
}

export default App;
