import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { TodoContext } from "../Context/Globalcontext";
import { useContext, useState } from "react";
import type { Selectdata, Task } from "../Interface/globalinterface";
import "./List.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import EditIcon from "@mui/icons-material/Edit";

export default function Listmanagecomponent() {
  const context: any = useContext(TodoContext);
  const { singlestate, setsinglestate } = context;

  const [selectedCard, setSelectedCard] = useState(0);
  const setselectask = (id: number) => {
    if (selectedCard !== id) {
      setSelectedCard(id);
    }
  };
  const togglefinish = (item: Task) =>
    setsinglestate((prev: Selectdata) => ({
      ...prev,
      Task: prev.Task.map((item2: Task) =>
        item2.id === item.id
          ? { ...item2, completed: !item2.completed }
          : { ...item2 }
      ),
    }));

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      sx={{ margin: "58px 8px 8px 8px" }}
      gap={1}
    >
      {singlestate.Task?.length > 0
        ? singlestate.Task.map((item: Task, index: number) => (
            <Card key={index} sx={{ width: "300px" }}>
              <CardActionArea
                onClick={() => setselectask(item.id)}
                data-active={selectedCard === item.id ? "" : undefined}
                sx={{
                  height: "100%",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <Stack
                    direction={"row"}
                    alignItems={"start"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Stack direction={"column"} justifyContent={"start"}>
                      <Tooltip title={item.completed ? "Not done" : "Done"}>
                        <IconButton
                          color={item.completed ? "success" : "error"}
                          onClick={() => togglefinish(item)}
                        >
                          {item.completed ? (
                            <CheckCircleIcon />
                          ) : (
                            <WatchLaterIcon />
                          )}
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="edit">
                        <IconButton
                          color={"warning"}
                          onClick={() => togglefinish(item)}
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        : ""}
    </Stack>
  );
}
