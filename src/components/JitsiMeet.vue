<template>
  <div id="jaas-container"></div>
</template>

<script>
export default {
  name: "JitsiMeet",
  mounted() {
    const domain = "8x8.vc";
    const options = {
      roomName: "vpaas-magic-cookie-a60420f14af34bceba2584ddb6390b51/Edumeet",
      parentNode: document.querySelector('#jaas-container'),
      jwt: ""
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
