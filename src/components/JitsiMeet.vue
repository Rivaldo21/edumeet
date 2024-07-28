<template>
  <div id="jaas-container"></div>
</template>

<script>
export default {
  name: "JitsiMeet",
  mounted() {
    const domain = "8x8.vc";
    const options = {
      roomName: "vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/SampleAppInterestedSurplusTerrifyThen",
      parentNode: document.querySelector('#jaas-container'),
      jwt: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZwYWFzLW1hZ2ljLWNvb2tpZS1hNjA0MjBmMTRhZjM0YmNlYmEyNTg0ZGRiNjM5MGI1MS83MTMxZGQifQ.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3MjIxMzI0MjgsImV4cCI6NDg3NTczMjQyOCwibmJmIjoxNzIyMTMyNDI4LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtYTYwNDIwZjE0YWYzNGJjZWJhMjU4NGRkYjYzOTBiNTEiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6IiIsImlkIjoiMzdiZTI2NjItNDAwNC00YTUyLTk2YjMtY2I5NjMwZGM2MjE1IiwiYXZhdGFyIjoiIiwiZW1haWwiOiIifX0sInJvb20iOiIqIn0.X4osyaqy32wE5menDSTtTGVnnsUUpUn_HrkQiJtAkTuo5QukGKNeBS9Fy8joejSCbqqHObPvA5spb4Osf5ACfiEubPK5NiyEw9HvFHM0v_rxPcxixSwXdYqFi_BlmVVQxvg4ATi2luAwf4TIQkuzgMsvKDwp4BAOaYmCyzjxHdwJuNcIzSHwdje4wzVyjIYSSBymxamsoi3bt8ayCcATvzSYrx9mFXz31f2oSBYbUTSO_DjzcyOPWZ5Nv385OAv7X9Dldg5NoIXwZdQ-o4EQR5WNaki9h9T9XVh70o48leMmtJgLdjeGX2_EYNFt_Th65p_BCax_wSdl0VZ4Y9TVHw"
    };

    /* global JitsiMeetExternalAPI */
    new JitsiMeetExternalAPI(domain, options);
  }
};
</script>

<style scoped>
html, body, #jaas-container {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

