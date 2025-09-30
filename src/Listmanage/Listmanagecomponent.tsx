import { Box, Chip, Stack, Typography } from "@mui/material";
import { TaskContext } from "../Context/Taskcontext";
import { useContext } from "react";
import Taskloadingskeletoncomponent from "../Component/Taskloadingskeleton";
import Dataemptycomponent from "../Component/Dataempty";
import Taskcardcomponent from "../Component/Taskcardcomponent";

export default function Listmanagecomponent() {
  const context: any = useContext(TaskContext);
  const { singlestate, notdonetask, inprogress, donetask } = context;

  return (
    <Box sx={{ padding: "130px 8px 20px 8px" }}>
      <Stack
        sx={{ marginBottom: "8px" }}
        direction={"row"}
        justifyContent={"center"}
        gap={1}
      >
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
              {inprogress}
            </Typography>
          }
          label="Inprogress"
          color="warning"
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
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={1}
      >
        {singlestate.loading ? (
          <Taskloadingskeletoncomponent />
        ) : singlestate.Task?.length > 0 ? (
          <Taskcardcomponent data={singlestate.Task} disabled={false} />
        ) : (
          <Dataemptycomponent />
        )}
      </Stack>
    </Box>
  );
}
