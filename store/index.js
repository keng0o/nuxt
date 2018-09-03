import Vuex from 'vuex'

import home from '@/store/modules/home'

const store = () =>
  new Vuex.Store({
    modules: {
      home,
    },
  })

export default store
