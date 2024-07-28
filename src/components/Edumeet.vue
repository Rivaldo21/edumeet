<template>
  <div class="edumeet-container">
    <div class="left-panel">
      <img src="@/assets/images/edu_logo.jpg" alt="Edumeet Logo" class="logo" />
      <div class="text-content">
        <h2>
          Ita prontu atu foti ekipa <br />
          ba level tuir mai?
        </h2>
        <p>
          Mai ita hasae tan diskusaun,<br />
          kolaborasaun, no produtividade<br />
          hamutuk iha sesaun tuir main
        </p>
      </div>
      <button class="primary-button" @click="goToJoinMeeting">Tama Enkontru</button>
      <button class="primary-button" @click="goToCreateMeeting">Kria Enkontru</button>
    </div>
    <div class="right-panel">
      <img src="@/assets/images/group_home.jpg" alt="Characters" class="characters" />
      <div class="text-content">
        <h2>Chese! Big smiles, everyone!</h2>
        <p>
          Iha ne'e ami halibur hamutuk<br />
          iha fatin dijital ida-ne'ebé nakonu<br />
          ho vontade hodi fahe, aprende<br />
          no liga malu iha tempu real.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    goToJoinMeeting() {
      this.$router.push('/jitsiMeet');
    },
    goToCreateMeeting() {
      this.$router.push('/create');
    }
  }
};
</script>

<style scoped>
html, body, .edumeet-container {
  height: 100%;
  margin: 0;
  padding: 0;
}

.edumeet-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.left-panel,
.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.left-panel {
  flex: 2; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
}

.right-panel {
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #212121;
  color: #fff;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

.characters {
  width: 300px;
  margin-bottom: 20px;
}

.text-content {
  text-align: center;
  line-height: 1.5;
  padding: 0 10px;
  margin-bottom: 20px;
}

.text-content h2, .text-content p {
  margin: 0 0 10px 0;
}

.primary-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 15px 30px;
  margin: 10px;
  cursor: pointer;
  border-radius: 100px;
  font-size: 16px;
  width: 300px; 
}

.primary-button:hover {
  background-color: #0056b3;
}
</style>
