export default {
  name: "Counter.Store",
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    count() {
      return this.state.count; // computed KO : see https://overmindjs.org/views/vue#computed
    },
    decrement() { var count = this.state.count; count--; this.actions.setCount(count); },
    increment() { var count = this.state.count; count++; this.actions.setCount(count); }
  }
}