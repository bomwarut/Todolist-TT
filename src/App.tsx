import { useLocation, useNavigate } from "react-router-dom";
import SunnyIcon from "@mui/icons-material/Sunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PieChartIcon from "@mui/icons-material/PieChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { TaskContext } from "./Context/Taskcontext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function App() {
  const { mode, setMode } = useColorScheme();
  const context: any = useContext(TaskContext);
  const { initialdata, Togglemodal } = context;
  const toggletheme = () => setMode(mode === "light" ? "dark" : "light");
  const navigate = useNavigate();

  const PageTitle = () => {
    const location = useLocation();
    const title =
      location.pathname
        .replace(/^\//, "")
        .replace(/^\w/, (c) => c.toUpperCase()) || "Dashboard";
    return title;
  };

  useEffect(() => {
    initialdata();
  }, []);

  return (
    <AppBar color="warning">
      <Toolbar
        variant="dense"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
          <Typography variant="h5">{PageTitle()}</Typography>
        <Box>
          <Tooltip title="Add Task">
            <IconButton
              onClick={() =>
                Togglemodal(
                  {
                    userId: 0,
                    id: 0,
                    title: "",
                    describtion: "",
                    completed: false,
                    datestart: "",
                    dateend: "",
                    progress: 0,
                    expanded: false,
                  },
                  true
                )
              }
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Graph">
            <IconButton onClick={() => navigate("/")}>
              <PieChartIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Task">
            <IconButton onClick={() => navigate("todolist")}>
              <AssignmentIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={mode === "light" ? "dark mode" : "light mode"}>
            <IconButton onClick={toggletheme}>
              {mode === "light" ? <DarkModeIcon /> : <SunnyIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default App;
