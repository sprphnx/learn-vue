Vue.createApp({
  data() {
    return { counter: 0, result: "Not there yet" };
  },
  watch: {
    result(newVal, oldVal) {
      console.log(newVal + " " + oldVal);
      if (newVal != oldVal) {
        this.counter = 0;
        this.result = "Not there yet";
      }
    },
  },
  computed: {
    checkResult() {
      if (this.counter > 37) {
        this.result = "Too much!";
      }
    },
  },
  methods: {
    add(num) {
      this.counter += num;
    },
  },
}).mount("#assignment");
