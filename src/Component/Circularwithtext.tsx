import {
  Box,
  CircularProgress,
  Typography,
  type CircularProgressProps,
} from "@mui/material";

export default function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        color={props.value < 100 ? "warning" : "success"}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          color={
            props.value < 100 && props.value > 0
              ? "warning"
              : props.value === 0
              ? "error"
              : "success"
          }
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
