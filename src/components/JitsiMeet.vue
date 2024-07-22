<template>
  <div id="jaas-container"></div>
</template>

<script>
export default {
  name: "JitsiMeet",
  mounted() {
    const domain = "8x8.vc";
    const options = {
      roomName: "vpaas-magic-cookie-0e75832af8c04a39a6ca7b8b80503166/CreateNewMeetingRoom",
      parentNode: document.querySelector('#jaas-container'),
      jwt: "YOUR_ENCODEeyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtMGU3NTgzMmFmOGMwNGEzOWE2Y2E3YjhiODA1MDMxNjYvMTUxMjdiLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE3MjE2NDQxMzMsImV4cCI6MTcyMTY1MTMzMywibmJmIjoxNzIxNjQ0MTI4LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtMGU3NTgzMmFmOGMwNGEzOWE2Y2E3YjhiODA1MDMxNjYiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6InJqMTQyODcyIiwiaWQiOiJnb29nbGUtb2F1dGgyfDExMDMwODA5NzMxNTg1MjMxODQ1NyIsImF2YXRhciI6IiIsImVtYWlsIjoicmoxNDI4NzJAZ21haWwuY29tIn19LCJyb29tIjoiKiJ9.O1IhMJqwWKFczwHHXP-JFNx8bAd892xBP8IP6dSR8-_WLIXWdFacqQzAi40dryAOJANaga9D76ilyR0LCWhEp0pZUGl7DfkEELtDKS6gNEe60z5UaXYtd31gaZG3sDfAbjUH0uslxq6Mh7JaKMrxzd4w1-CnZqr89zTn48kcaEgg8zLhGOnF0IJs15oRSiEttvidhwlEFazN1MAPyUpMgwtJ6Cs7sd8c9j04s7aZXaB-eRz-dyx3VlA26r3dYepdrXLhxoVWGFh60rar2ceNd42ua1Wl-9eO6n7zNWbTpxdbIpfWEg5_DVb_QJZWEBK3-rGikGOuoB2_jW_VgtmDWQD_JWT" // Ganti dengan JWT Anda yang sebenarnya
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

