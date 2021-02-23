export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  if (!store.state.authenticated && route.fullPath !== '/login') {
    return redirect('/login')
  }
}