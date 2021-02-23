<template>
  <ul class="vertical-menu list-unstyled">
    <li v-for="(li, index) in list" :key="index" class="vertical-menu__li">
      <router-link class="vertical-menu__link" :to="li.path">
        {{ li.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "VerticalMenu",

  props: {
    list: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.vertical-menu__link {
  padding: 9px 18px;
  display: block;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  color: inherit;
  background: rgba(0, 0, 0, 0.03);
  transition: 0.2s all;
}

.vertical-menu__link:hover,
.vertical-menu__link:focus {
  color: inherit;
  background: rgba(0, 0, 0, 0.05);
  text-decoration: none;
}

.vertical-menu__li:last-child .vertical-menu__link {
  border: none;
}
</style>