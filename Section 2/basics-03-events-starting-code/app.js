const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "Your name:",
      confirmedName: "",
    };
  },
  methods: {
    addCounter(num) {
      this.counter += num;
    },
    reduceCounter(num) {
      this.counter -= num;
    },
    //Below method takes in an event object that contains all the
    //detail of the event that took place
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("Testing form submit");
    },
    setConfirmedName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
