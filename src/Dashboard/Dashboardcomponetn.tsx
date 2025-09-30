import { Box, Stack, Typography } from "@mui/material";
import CircularProgressWithLabel from "../Component/Circularwithtext";
import { useContext } from "react";
import { TaskContext } from "../Context/Taskcontext";

export default function Dashboardcomponent() {
  const context: any = useContext(TaskContext);
  const { singlestate, notdonetask, inprogress, donetask } = context;

  const total = singlestate.Task.length || 1;

  const notdonetaskpercent = (notdonetask / total) * 100;
  const inprogresspercent = (inprogress / total) * 100;
  const donetaskpercent = (donetask / total) * 100;

  return (
    <Stack
      direction={"row"}
      sx={{ padding: "130px 8px 8px 8px", width: "fit-context" }}
      justifyContent={"space-around"}
      flexWrap={"wrap"}
    >
      <Stack direction={"column"} gap={"20px"} sx={{ width: "fit-content" }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          sx={{ width: "fit-content" }}
        >
          <CircularProgressWithLabel
            colors={"error"}
            value={notdonetaskpercent}
            sizes="large"
          />
          <Stack direction={"column"}>
            <Typography variant="h3">: Not done</Typography>
            <br />
            <Stack direction={"row"}>
              <Typography color={"error"} variant="h4">
                {notdonetask}
              </Typography>{" "}
              &nbsp;&nbsp;
              <Typography variant="h4">Task</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          sx={{ width: "fit-content" }}
        >
          <CircularProgressWithLabel
            colors={"warning"}
            value={inprogresspercent}
            sizes="large"
          />
          <Stack direction={"column"}>
            <Typography variant="h3">: Inprogress</Typography>
            <br />
            <Stack direction={"row"}>
              <Typography color={"warning"} variant="h4">
                {inprogress}
              </Typography>
              &nbsp;&nbsp;
              <Typography variant="h4">Task</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          sx={{ width: "fit-content" }}
        >
          <CircularProgressWithLabel
            colors={"success"}
            value={donetaskpercent}
            sizes="large"
          />
          <Stack direction={"column"}>
            <Typography variant="h3">: Done</Typography>
            <br />
            <Stack direction={"row"}>
              <Typography color={"success"} variant="h4">
                {donetask}
              </Typography>
              &nbsp;&nbsp;
              <Typography variant="h4">Task</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Typography variant="h2" sx={{ margin: "30px auto 30px auto" }}>
          Total : {singlestate.Task?.length}
        </Typography>
      </Stack>
      <Stack direction={"row"}>
        <Box>
          <Typography variant="h5">Not done</Typography>
          <Stack direction={"column"}></Stack>
        </Box>
        <Box>
          <Typography variant="h5">Inprogress</Typography>
          <Stack direction={"column"}></Stack>
        </Box>
        <Box>
          <Typography variant="h5">Done</Typography>
          <Stack direction={"column"}></Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
