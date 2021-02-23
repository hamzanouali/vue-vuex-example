<template>
  <div class="container-fluid h-100">
    <div class="browse-page row h-100">
      <div class="browse-page__menu d-flex flex-column col-lg-2 h-100">
        <p>logo</p>
        <VerticalMenu class="mt-5" :list="$store.state.menu"></VerticalMenu>
        <div class="flex-grow-1 d-flex flex-column justify-content-end">
          <button
            @click="$router.replace('/admin')"
            class="browse-page__menu-btn btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              fill="currentColor"
              class="bi bi-box-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
              />
              <path
                fill-rule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              />
            </svg>
            <span class="mx-2">
              Admin
            </span>
          </button>
        </div>
      </div>
      <div class="col-lg-10 h-100 p-0">
        <div class="browse-page__main h-100 overflow-auto">
          <h1 class="mb-5 px-2">Users</h1>
          <div class="container">
            <div class="row">
              <div
                v-for="(user, index) in $store.state.users"
                :key="index"
                class="col-lg-3 mb-4"
              >
                <UserCard
                  :path="`/user/${handleUserPath(user.name)}`"
                  :image="user.image"
                  :name="user.name"
                  :city="user.address.city"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VerticalMenu from "@/components/VerticalMenu.vue";
import UserCard from "@/components/UserCard.vue";

export default {
  components: {
    VerticalMenu,
    UserCard
  },

  mounted() {
    this.$store.dispatch("users");
  },

  methods: {
    handleUserPath(name) {
      return name
        .split(/\s/gm)
        .join("-")
        .toLowerCase();
    }
  }
};
</script>

<style scoped>
.browse-page__menu {
  background: #fafafa;
  padding: 2rem 1.5rem;
}

.browse-page__main {
  padding: 2rem 2.5rem;
}

.browse-page__menu-btn {
  text-align: initial;
}
</style>