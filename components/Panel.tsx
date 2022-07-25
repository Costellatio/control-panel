import { Grid } from "@mui/material";
import { RealTimeProvider } from "../lib";
import Analytics from "./Analytics";
import Controller from "./Controller";
import Visualization from "./Visualization";

const Panel = () => {
  return (
    <Grid
      container
      width='100%'
      height='100%'
      direction='column'
      justifyContent='center'
      alignItems='center'
      spacing={2}
      sx={{
        '& .MuiGrid-item': {
          width: '50%',
        }
      }}
    >
      <RealTimeProvider>
        <Grid item xs={12}><Controller /></Grid>
        <Grid item xs={10}><Visualization /></Grid>
      </RealTimeProvider>
      <Grid item xs={2}><Analytics /></Grid>
    </Grid>
  );
}

export default Panel;
