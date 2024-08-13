<template>
  <div id="jaas-container"></div>
</template>

<script>
export default {
  name: "JitsiMeet",
  mounted() {
    const domain = "8x8.vc";
    const options = {
      roomName:
        "vpaas-magic-cookie-8bb988617ed14047acc207e7f35ddcaa/SampleAppInterestedSurplusTerrifyThen",
      parentNode: document.querySelector("#jaas-container"),
      jwt: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZwYWFzLW1hZ2ljLWNvb2tpZS04YmI5ODg2MTdlZDE0MDQ3YWNjMjA3ZTdmMzVkZGNhYS8xZDY4NzUifQ.eyJhdWQiOiJqaXRzaSIsImNvbnRleHQiOnsidXNlciI6eyJpZCI6ImY1YTMxOTFjLTY2ZTAtNDUzOS1hZDczLWE2MDRmY2EwODRkOSIsIm5hbWUiOiJSIEoiLCJhdmF0YXIiOiJhdmF0YXIiLCJlbWFpbCI6InJqMTQyODcyQGdtYWlsLmNvbSIsIm1vZGVyYXRvciI6InRydWUifSwiZmVhdHVyZXMiOnsibGl2ZXN0cmVhbWluZyI6InRydWUiLCJyZWNvcmRpbmciOiJ0cnVlIiwidHJhbnNjcmlwdGlvbiI6InRydWUiLCJvdXRib3VuZC1jYWxsIjoidHJ1ZSJ9fSwiaXNzIjoiY2hhdCIsInJvb20iOiIqIiwic3ViIjoidnBhYXMtbWFnaWMtY29va2llLThiYjk4ODYxN2VkMTQwNDdhY2MyMDdlN2YzNWRkY2FhIiwiZXhwIjoxNzU1MTEwODI3LCJuYmYiOjE3MjM1NzQ4MTcsImlhdCI6MTcyMzU3NDgyN30.boONoiaOGSsHvO0afpm75VOOR1B3qWn4ftEQSjvOifqqN_xLS7qyWg48woOmMM91bKUaTlO3LA1UbYVLmskyL6enUKaeyxJjVQ-NG_VFw5BJj-wE8opuBH06Fyt1bsQvkpkOk20U85e46LBUcJRfxL37-1ahki0RXKRJoHUVFfJQY-30KAWClbLvbX1ki0srWSGeDI6UtvkK2FG3ynU7zdN5i3rsHdEg_unpvTKvgwh-ixtb85ECy6KUWyO3sOHDJrgeZ4pQRRRNGhi6hQb97C_h3hKt5fr52WVv6t8oziGCWxxCtqkOlO2Wtn-qZIpFvCV1eCuZiAMNoaDF7KFiZQ",
    };

    /* global JitsiMeetExternalAPI */
    new JitsiMeetExternalAPI(domain, options);
  },
};
</script>

<style scoped>
html,
body,
#jaas-container {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
