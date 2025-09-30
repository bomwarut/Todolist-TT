import type { IconButtonProps } from "@mui/material";

export interface Task {
  userId: number;
  id: number;
  title: string;
  describtion: string;
  completed: boolean;
  datestart: string;
  dateend: string;
  progress: number;
  expanded : boolean;
}

export interface Selectdata {
  Task: Task[];
  uinotfound: boolean;
  loading: boolean;
  saving: boolean;
  sorted: boolean;
}

export interface Taskmange {
  selectedCard: number;
  openmodal: boolean;
  Taskdata : Task
}

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

