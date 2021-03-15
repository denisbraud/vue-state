export default {
  name: "Counter.NoState",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    decrement() { this.count--; },
    increment() { this.count++; }
  }
}