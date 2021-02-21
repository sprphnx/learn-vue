Vue.createApp({
  data() {
    return {
      name: "Rohan",
      age: 33,
      imageUrl:
        "https://seeklogo.com/images/P/pinterest-logo-8561DDA2E1-seeklogo.com.png",
      staticText: "Pintrest logo",
    };
  },
  methods: {
    addAgeBy5() {
      return this.age + 5;
    },
    randomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
