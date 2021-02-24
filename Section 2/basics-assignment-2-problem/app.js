Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedUserInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Good morning !!!");
    },
    setUserInput() {
      this.userInput = event.target.value;
    },
    setConfirmedUserInput() {
      this.confirmedUserInput = event.target.value;
    },
  },
}).mount("#assignment");
