export interface Task {
  userId: number;
  id: number;
  title: string;
  describtion: string;
  completed: boolean;
}

export interface Selectdata {
  Task: Task[];
  uinotfound: boolean;
}
