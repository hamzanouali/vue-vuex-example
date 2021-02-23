<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="login-card col-md-6 col-lg-4">
        <h1 class="login-card__headline">sign in to your account</h1>
        <b-form @submit="onSubmit">
          <b-form-input
            class="login-card__input"
            v-model="form.username"
            placeholder="Enter username"
            required
          ></b-form-input>

          <b-form-input
            class="login-card__input"
            type="password"
            v-model="form.password"
            placeholder="Enter your password"
            required
          ></b-form-input>

          <b-form-group
            class="login-card__checkbox-group"
            id="input-group-4"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              v-model="form.checked"
              id="checkboxes-4"
              :aria-describedby="ariaDescribedby"
            >
              <b-form-checkbox :value="true">Keep me signed in</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button
            class="login-card__submit-btn"
            type="submit"
            variant="primary"
            >sign in</b-button
          >
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    // If the user is authenticated
    if (store.state.authenticated) {
      return redirect("/");
    }
  },

  data() {
    return {
      form: {
        username: "",
        password: "",
        checked: []
      }
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.dispatch("login", this.form);
    }
  }
};
</script>

<style scoped>
.login-card {
  margin-top: 5rem;
}

.login-card__headline {
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.8;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2.5rem;
}

.login-card__checkbox-group {
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  font-size: 16px;
  opacity: 0.8;
}

.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #746bde;
  background-color: #746bde;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 2px;
}

.login-card__input {
  margin-bottom: 1rem;
  border: 1px solid transparent;
  background: #e5e8ed;
  padding: 12px 20px;
  height: auto;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 4px;
  transition: 0.2s all;
}

.login-card__input:focus {
  border: 1px solid #ccc;
}

.login-card__submit-btn {
  display: block;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 20px;
  background: #746bde;
  color: white;
  border: 1px solid transparent;
  border-radius: 4px;
}
</style>