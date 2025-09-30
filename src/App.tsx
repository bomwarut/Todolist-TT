import { useLocation, useNavigate } from "react-router-dom";
import SunnyIcon from "@mui/icons-material/Sunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PieChartIcon from "@mui/icons-material/PieChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import {
  AppBar,
  Box,
  Chip,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useColorScheme,
} from "@mui/material";
import { useContext, useEffect } from "react";
import type { Task } from "./Interface/globalinterface";
import { TaskContext } from "./Context/Taskcontext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function App() {
  const { mode, setMode } = useColorScheme();
  const context: any = useContext(TaskContext);
  const { singlestate, initialdata, Togglemodal } = context;
  const notdonetask = singlestate?.Task.filter(
    (item: Task) => !item.completed
  )?.length;
  const donetask = singlestate?.Task.filter(
    (item: Task) => item.completed
  )?.length;
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
        <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
          <Typography variant="h5">{PageTitle()}</Typography>
          <Stack direction={"row"} gap={1}>
            <Chip
              icon={
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ marginLeft: "8px !important" }}
                >
                  {donetask}
                </Typography>
              }
              label="Done"
              color="success"
              sx={{ color: "white" }}
              onClick={() => {}}
            />
            <Chip
              icon={
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ marginLeft: "8px !important" }}
                >
                  {notdonetask}
                </Typography>
              }
              color="error"
              label="Not done"
              sx={{ color: "white" }}
              onClick={() => {}}
            />
          </Stack>
        </Stack>
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
