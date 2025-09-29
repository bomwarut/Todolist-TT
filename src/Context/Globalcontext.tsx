// store/TodoProvider.tsx
import { createContext, useState, type ReactNode } from "react";
import type { Selectdata } from "../Interface/globalinterface";

const TodoContext = createContext<any | undefined>(undefined);

const selectdataobject: Selectdata = {
  Task: [],
  uinotfound: false,
};

export default function TodoProvider({ children }: { children: ReactNode }) {
  const [singlestate, setsinglestate] = useState<Selectdata>(selectdataobject);

  return (
    <TodoContext.Provider value={{ singlestate, setsinglestate }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext };
