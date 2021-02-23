export const state = () => ({
  authenticated: false,

  users: [],

  menu: [
    {
      name: 'menu item 1',
      path: '/path-1'
    },
    {
      name: 'menu item 2',
      path: '/path-2'
    },
    {
      name: 'menu item 3',
      path: '/path-3'
    },
  ]
})

export const mutations = {
  auth(state) {
    state.authenticated = true
  },

  users(state, data) {
    state.users = [...state.users, ...data]
  }
}

export const actions = {
  login({ commit }, form) {
    if (form.username !== 'admin' || form.password !== '1234') {
      alert('Password or username are not correct. TODO: build notification for this')
    } else {
      commit('auth')
      this.$router.replace('/')
    }
  },

  async users({ commit }) {
    const response = await this.$axios.get('https://api.mocki.io/v1/134409c3')
    commit('users', response.data)
  }
}