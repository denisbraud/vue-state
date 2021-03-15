export default {
  name: "Counter.Store",
  data() {
    return {
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    decrement() { var count = this.$store.state.count; count--; this.$store.commit('setCount', count); },
    increment() { var count = this.$store.state.count; count++; this.$store.commit('setCount', count); }
  }
}