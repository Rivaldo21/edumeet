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
      jwt: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZwYWFzLW1hZ2ljLWNvb2tpZS04YmI5ODg2MTdlZDE0MDQ3YWNjMjA3ZTdmMzVkZGNhYS8xZDY4NzUifQ.eyJhdWQiOiJqaXRzaSIsImNvbnRleHQiOnsidXNlciI6eyJpZCI6IjBhMGMzNjdjLThhMjItNGZlZS05MzlkLTMxYWFmYTZiN2UwZCIsIm5hbWUiOiJSIEoiLCJhdmF0YXIiOiJhdmF0YXIiLCJlbWFpbCI6InJqMTQyODcyQGdtYWlsLmNvbSIsIm1vZGVyYXRvciI6InRydWUifSwiZmVhdHVyZXMiOnsibGl2ZXN0cmVhbWluZyI6InRydWUiLCJyZWNvcmRpbmciOiJ0cnVlIiwidHJhbnNjcmlwdGlvbiI6InRydWUiLCJvdXRib3VuZC1jYWxsIjoidHJ1ZSJ9fSwiaXNzIjoiY2hhdCIsInJvb20iOiIqIiwic3ViIjoidnBhYXMtbWFnaWMtY29va2llLThiYjk4ODYxN2VkMTQwNDdhY2MyMDdlN2YzNWRkY2FhIiwiZXhwIjoxNzIzMTA3Nzc0LCJuYmYiOjE3MjMwOTY5NjQsImlhdCI6MTcyMzA5Njk3NH0.O3npbakap6_40in0G8bzxxxhUtZRhgfQlhrjfEt6L6z_-Oft6YyPWlkaCSO1nWQy_6FRjoXP8NggrXhaZ9mRQEb9up-75vbEw7Bj96ls9dA04dmHkeFf6UWOY53QbX9NqMY1oIxj1QToyKFrSqkSROgoYl4Ag6e4pLBypHk9yBikxeHDO02EOIXYTRwdJX3nygqKL-TJo5hr29uiAafe8s1yP-tonFEZTD8eCVfIg1MAGF2D-GUrIRYyKGo76bYC2ooHkMqvaoHBYsRAi0yvori6P_UGTdFBOj-4Jx3hb4zhv9NjXI6ibrbaXaErlV4VYXgqqBQmD7b3sMleAZAhnw",
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
