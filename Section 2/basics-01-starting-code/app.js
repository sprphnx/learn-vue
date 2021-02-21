const app = Vue.createApp({
  data() {
    return {
      myText: "This is string interpolation",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn vue!!!";
      } else {
        return "Master vue!!!";
      }
    },
  },
});
app.mount("#user-goal");
