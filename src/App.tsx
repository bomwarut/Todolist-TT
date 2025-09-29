import { useNavigate } from "react-router-dom";
import SunnyIcon from "@mui/icons-material/Sunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PieChartIcon from "@mui/icons-material/PieChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useContext, useEffect } from "react";
import Useapi from "./API/Apiglobal";
import type { Selectdata, Task } from "./Interface/globalinterface";
import { TodoContext } from "./Context/Globalcontext";

function App() {
  const { mode, setMode } = useColorScheme();
  const context: any = useContext(TodoContext);
  const { singlestate, setsinglestate } = context;
  const notdonetask = singlestate?.Task.filter(
    (item: Task) => !item.completed
  )?.length;
  const toggletheme = () => setMode(mode === "light" ? "dark" : "light");
  const navigate = useNavigate();

  useEffect(() => {
    Useapi("https://jsonplaceholder.typicode.com/todos").then((res: any) => {
      setsinglestate((prev: Selectdata) =>
        res.status === 200
          ? {
              ...prev,
              Task: res.data.map((item: Task) => ({
                ...item,
                describtion: "",
              })),
              uinotfound: false,
            }
          : { ...prev, Task: [], uinotfound: true }
      );
    });
  }, []);

  return (
    <AppBar>
      <Toolbar variant="dense" sx={{ display: "flex", justifyContent: "end" }}>
        <Typography variant="h1"></Typography>
        <Tooltip title="Graph">
          <IconButton onClick={() => navigate("/")}>
            <PieChartIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Task">
          <IconButton onClick={() => navigate("todolist")}>
            <Badge badgeContent={notdonetask} color="warning">
              <AssignmentIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title={mode === "light" ? "dark mode" : "light mode"}>
          <IconButton onClick={toggletheme}>
            {mode === "light" ? <DarkModeIcon /> : <SunnyIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default App;
