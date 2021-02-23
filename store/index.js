export const state = () => ({
  authenticated: false
})

export const mutations = {
  auth(state) {
    state.authenticated = true
  }
}

export const actions = {
  login({ commit }, form) {
    if (form.username !== 'admin' || form.password !== '1234') {
      alert('Password or username are not correct.')
    } else {
      commit('auth')
      this.$router.replace('/')
    }
  }
}