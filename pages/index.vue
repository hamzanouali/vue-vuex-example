<template>
  <div>
    <div>Hello world</div>
    <router-link v-if="!$store.state.authenticated" to="/login">
      signin
    </router-link>
    <router-link to="/users">
      users
    </router-link>
  </div>
</template>