import {
  Box,
  useTheme,
  IconButton,
  Stack,
  Typography,
  TextField,
  Button,
  Slider,
  Input,
} from "@mui/material";
import { useContext } from "react";
import { TaskContext } from "../Context/Taskcontext";
import CloseIcon from "@mui/icons-material/Close";

export default function ListmanageEditcomponent() {
  const theme = useTheme();
  const context: any = useContext(TaskContext);
  const backgroundwhite = theme.palette.background.paper;
  const { singlestate, Savetask, Togglemodal } = context;

  const submit = () =>
    Savetask({
      userId: 0,
      id: singlestate.Task[singlestate.Task.length - 1].id + 1,
      title: "",
      describtion: "",
      completed: false,
      datestart: "",
      dateend: "",
      progress: 0,
      expanded: false,
    });

  return (
    <Box
      sx={{
        padding: "30px",
        background: backgroundwhite,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        Edit Task
      </Typography>
      <IconButton
        sx={{ position: "absolute", top: "5px", right: "10px" }}
        onClick={() => Togglemodal(false)}
      >
        <CloseIcon />
      </IconButton>
      <Stack direction={"column"} gap={3}>
        <Stack direction={"column"} gap={3}>
          <TextField label="Title" variant="outlined" />
          <TextField label="Describtion" variant="outlined" />
        </Stack>
        <Typography variant="body1">Progress</Typography>
        <Stack direction={"row"} gap={3}>
          <Slider valueLabelDisplay="auto" />
          <Input
            value={0}
            size="small"
            onChange={() => {}}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
            }}
          />
        </Stack>
        <Stack direction={"row"} justifyContent={"end"}>
          <Button
            variant="contained"
            loading={singlestate.saving}
            onClick={submit}
          >
            <Typography variant="body1">Save</Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
