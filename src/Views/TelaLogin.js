import React from "react";
import LoginUsuario from "../Components/Login";
// import WaveLogin from "../Components/wave-login";
import { Grid } from "@material-ui/core";
import Wave from "../Images/Caminho 8.png";

export default function TelaLogin() {
  return (
    <>
      <Grid container alignContent='center' direction='column'>
        <Grid
          item
          xs={4}
          justify='center'
          alignItems='center'
          style={{ marginTop: 10 }}>
          <LoginUsuario />
        </Grid>
      </Grid>
      <Grid container direction='row' alignContent='flex-end'>
        <Grid>
          <img src={Wave} alt='' style={{ maxWidth: 1920, marginTop: 18 }} />
        </Grid>
        {/* <Grid item xs={12} alignItems="flex-end" style={{ paddingBottom: 2 }}>
                    <WaveLogin />
                </Grid> */}
      </Grid>
    </>
  );
}
