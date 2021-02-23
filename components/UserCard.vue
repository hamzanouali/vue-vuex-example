<template>
  <router-link :to="path" class="user-card">
    <img class="user-card__image w-100 rounded" :src="image" />
    <div class="user-card__info">
      <h3 class="user-card__user-name">{{ name }}</h3>
      <p class="user-card__user-city">{{ city }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.user-card {
  position: relative;
  display: block;
  text-decoration: none;
  color: inherit;
  border-radius: 5px;
  overflow: hidden;
}

.user-card::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: 0;
  transition: 0.2s all;
}

.user-card:hover::before {
  opacity: 1;
}

.user-card__info {
  position: absolute;
  z-index: 2;
  color: white;
  left: 0;
  right: 0;
  top: 0;
  font-size: 1rem;
  text-align: center;
  margin-top: 55%;
  padding: 0 0.5rem;
  opacity: 0;
  transition: 0.2s all;
}

.user-card:hover .user-card__info {
  opacity: 1;
}

.user-card__user-name {
  font-size: 1.3em;
  font-weight: 600;
}
</style>