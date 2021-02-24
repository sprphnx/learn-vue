const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      phone: "+91-9876543210",
    };
  },
  watch: {
    counter(value) {
      if (value > 100 || value < 0) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      console.log("full name function called!!!");
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
