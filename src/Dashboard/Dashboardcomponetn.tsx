import { Box, Stack, Typography } from "@mui/material";
import CircularProgressWithLabel from "../Component/Circularwithtext";
import { useContext } from "react";
import { TaskContext } from "../Context/Taskcontext";

export default function Dashboardcomponent() {
  const context: any = useContext(TaskContext);
  const { singlestate, notdonetask, inprogress, donetask } = context;

  const notdonetaskpercent = (notdonetask / singlestate.Task?.length) * 100;
  const inprogresspercent = (inprogress / singlestate.Task?.length) * 100;
  const donetaskpercent = (donetask / singlestate.Task?.length) * 100;

  return (
    <Box sx={{ margin: "130px 8px 8px 8px", width: "fit-context" }}>
      <CircularProgressWithLabel value={notdonetaskpercent} />
      <CircularProgressWithLabel value={inprogresspercent} />
      <CircularProgressWithLabel value={donetaskpercent} />
      <Typography variant="h6">Total : {singlestate.Task?.length}</Typography>
    </Box>
  );
}
