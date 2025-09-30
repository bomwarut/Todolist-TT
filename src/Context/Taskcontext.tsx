import { createContext, useState, type ReactNode } from "react";
import type { Selectdata, Task, Taskmange } from "../Interface/globalinterface";
import Useapi from "../API/Apiglobal";

const TaskContext = createContext<any | undefined>(undefined);

const selectdataobject: Selectdata = {
  Task: [],
  uinotfound: false,
  loading: false,
  saving: false,
  sorted: false,
};

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [singlestate, setsinglestate] = useState<Selectdata>(selectdataobject);
  const [Taskmangastate, setTaskmangastate] = useState<Taskmange>({
    selectedCard: 0,
    openmodal: false,
    Taskdata: {
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
  });

  const initialdata = () => {
    setsinglestate((prev: Selectdata) => ({ ...prev, loading: true }));
    Useapi("https://jsonplaceholder.typicode.com/todos").then((res: any) => {
      setTimeout(() => {
        setsinglestate((prev: Selectdata) =>
          res.status === 200
            ? {
                ...prev,
                Task: res.data.map((item: Task) => ({
                  ...item,
                  describtion: "",
                  datestart: "",
                  dateend: "",
                  progress: item.completed ? 100 : 0,
                  expanded: false,
                })),
                uinotfound: false,
                loading: false,
              }
            : { ...prev, Task: [], uinotfound: true, loading: false }
        );
      }, 1000);
    });
  };

  const Togglemodal = (val: boolean) =>
    setTaskmangastate((prev: Taskmange) => ({
      ...prev,
      openmodal: val,
    }));

  const Selectask = (item: Task) => {
    if (Taskmangastate.selectedCard !== item.id) {
      setTaskmangastate((prev) => ({
        ...prev,
        selectedCard: item.id,
        Taskdata: item,
      }));
    }
  };

  const Expandcard = (item: Task) =>
    setsinglestate((prev: Selectdata) => ({
      ...prev,
      Task: prev.Task.map((item2: Task) =>
        item2.id === item.id
          ? { ...item2, expanded: !item2.expanded }
          : { ...item2 }
      ),
    }));

  const Savetask = (item: Task) => {
    setsinglestate((prev: Selectdata) => ({
      ...prev,
      Task: [...prev.Task, { ...item }],
      saving: true,
    }));
    setTimeout(() => {
      setsinglestate((prev: Selectdata) => ({
        ...prev,
        saving: false,
      }));
      Togglemodal(false);
    }, 1000);
  };

  return (
    <TaskContext.Provider
      value={{
        singlestate,
        Taskmangastate,
        initialdata,
        Selectask,
        Expandcard,
        Togglemodal,
        Savetask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext };
