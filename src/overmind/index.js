import { createOvermind } from 'overmind'
import { createPlugin } from 'overmind-vue'

const config = {
  state: {
    count: 2
  },
  actions: {
    setCount({ state }, n) {
      state.count = n;
    }
  }
}
const overmind = createOvermind(config, { devtools: false });
export const OvermindPlugin = createPlugin(overmind);
