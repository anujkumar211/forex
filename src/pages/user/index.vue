<template>
 <div class="container">
  <div class="row w-100">
   <div class="col-sm-6 m-auto">
    <div class=" card-body">
     <h2 class="mb-3">Login Form</h2>
     <ValidationObserver ref="observer">
      <form @submit.prevent="handleSubmit">
       <div class="form-group">
        <ValidationProvider rules="required" v-slot="{ errors }">
         <label for="firstName">Email</label>
         <div class="form-group">
          <input
           v-model="user.email"
           type="email"
           class="form-control"
           :class="{ invalid: errors.length }"
          />
          <p class="invalid-error">{{ errors[0] }}</p>
         </div>
        </ValidationProvider>
       </div>
       <ValidationProvider rules="required" v-slot="{ errors }">
        <label for="firstName">Password</label>
        <div class="form-group">
         <input
          v-model="user.password"
          type="password"
          class="form-control"
          :class="{ invalid: errors.length }"
         />
         <p class="invalid-error">{{ errors[0] }}</p>
        </div>
       </ValidationProvider>
       <button
        type="submit"
        class="btn btn-primary btn-lg mt-2"
        :class="{ 'is-loading': loading }"
       >
        Login
       </button>
      </form>
     </ValidationObserver>
    </div>
   </div>
  </div>
 </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import api from "@/api/user";
export default {
 name: "app",
 components: {
  ValidationProvider,
  ValidationObserver,
 },
 data() {
  return {
   user: {
    email: "",
    password: "",
   },
   loading: false,
  };
 },
 methods: {
  async handleSubmit() {
   try {
    const valid = await this.$refs.observer.validate();
    if (valid) {
     this.loading = true;
     const { data } = await api.loginin({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
     });
     this.$store.dispatch("SET_TOKEN", data.token);
     this.$router.push("/user");
     this.loading = false;
    }
   } catch (error) {
    this.loading = false;
   }
  },
 },
};
</script>
<style scoped>
.container {
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
}
.card-body {
 border: 1px solid #e2e2e2;
 border-radius: 15px;
 padding: 40px 20px;
}
</style>
