import { useNavigate } from "react-router-dom";
import SunnyIcon from "@mui/icons-material/Sunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PieChartIcon from "@mui/icons-material/PieChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { AppBar, IconButton, Toolbar, useColorScheme } from "@mui/material";

function App() {
  const { mode, setMode } = useColorScheme();
  const toggletheme = () => setMode(mode === "light" ? "dark" : "light");
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton onClick={() => navigate("/")}>
          <PieChartIcon />
        </IconButton>
        <IconButton onClick={() => navigate("todolist")}>
          <AssignmentIcon />
        </IconButton>
        <IconButton onClick={toggletheme}>
          {mode === "light" ? <DarkModeIcon /> : <SunnyIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default App;
