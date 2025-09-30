import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Collapse,
  IconButton,
  Modal,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { TaskContext } from "../Context/Taskcontext";
import { useContext } from "react";
import type { ExpandMoreProps, Task } from "../Interface/globalinterface";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import Taskloadingskeletoncomponent from "../Component/Taskloadingskeleton";
import CircularProgressWithLabel from "../Component/Circularwithtext";
import ListmanageEditcomponent from "./ListmanageEdit";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function Listmanagecomponent() {
  const context: any = useContext(TaskContext);
  const {
    singlestate,
    Taskmangastate,
    Selectask,
    Togglemodal,
    Expandcard,
    notdonetask,
    inprogress,
    donetask,
  } = context;

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        gap={1}
        sx={{ margin: "130px 8px 8px 8px" }}
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
          singlestate.Task.map((item: Task, index: number) => (
            <Card key={index} sx={{ width: "300px", height: "fit-content" }}>
              <CardActionArea
                onClick={() => Selectask(item)}
                data-active={
                  Taskmangastate.selectedCard === item.id ? "" : undefined
                }
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
                <CardContent sx={{ height: "100%", padding: "4px" }}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Tooltip title="Edit">
                      <IconButton
                        size="small"
                        color={item.completed ? "success" : "error"}
                        onClick={() => Togglemodal(item, true)}
                      >
                        <CircularProgressWithLabel value={item.progress} />
                      </IconButton>
                    </Tooltip>
                    <Typography
                      variant="h6"
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <ExpandMore
                      expand={item.expanded}
                      onClick={() => Expandcard(item)}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </Stack>
                </CardContent>
                <Collapse in={item.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography>{item.describtion}</Typography>
                  </CardContent>
                </Collapse>
              </CardActionArea>
            </Card>
          ))
        ) : (
          ""
        )}
      </Stack>

      <Modal
        open={Taskmangastate.openmodal}
        onClose={() =>
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
            false
          )
        }
        sx={{
          margin: "auto",
          height: "fit-content",
          width: "fit-content",
          maxHeight: "calc(100% - 10px)",
          maxWidth: "calc(100% - 10px)",
        }}
      >
        <Box>
          <ListmanageEditcomponent />
        </Box>
      </Modal>
    </>
  );
}
