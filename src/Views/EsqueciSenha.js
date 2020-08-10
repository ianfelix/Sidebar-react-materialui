import React from "react";
import TelaRecuperarSenha from "../Components/Esenha";
// import WaveLogin from "../Components/wave-login";
import { Grid } from "@material-ui/core";
import Wave from "../Images/Caminho 8.png";

export default function EsqueciSenha() {
  return (
    <>
      <Grid container alignContent='center' direction='column'>
        <Grid
          item
          xs={4}
          justify='center'
          alignItems='center'
          style={{ marginTop: 10 }}>
          <TelaRecuperarSenha />
        </Grid>
      </Grid>
      <Grid container direction='row' alignContent='flex-end'>
        <Grid>
          <img src={Wave} alt='' style={{ maxWidth: 1920, marginTop: 27 }} />
        </Grid>
        {/* <Grid item xs={12} alignItems="flex-end" style={{ marginTop: 7 }}>
                    <WaveLogin />
                </Grid> */}
      </Grid>
    </>
  );
}
