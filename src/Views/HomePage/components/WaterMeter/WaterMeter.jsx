import("./WaterMeter.css");

import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

export default function WaterMeter(props) {
  const { percentage } = props;

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          value={percentage}
          sx={{ height: "20px", borderRadius: "20px" }}
        />
      </Box>
      <Typography color="white">{`${percentage.toFixed(0)}%`}</Typography>
    </Box>
  );
}
