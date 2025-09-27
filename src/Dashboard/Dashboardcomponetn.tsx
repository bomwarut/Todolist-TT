import { useEffect } from "react";
import Useapi from "../API/Apiglobal";
import { Box } from "@mui/material";

export default function Dashboardcomponent() {
  useEffect(() => {
    Useapi("https://jsonplaceholder.typicode.com/todos").then((res: any) => {
      console.log(res);
    });
  }, []);

  return <Box>Dashboard</Box>;
}
