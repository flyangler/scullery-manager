<template>
  <form @submit.prevent="submitform">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{ tab | titleCase }} to access your stuff
      </q-banner>
    </div>
    <div>
      <q-input
        v-model="formData.email"
        :rules="[
          (val) => validateEmail(val) || 'Please use a valid email address',
        ]"
        autofocus
        type="email"
        ref="email"
        lazy-rules
        outlined
        class="col"
        label="Email"
        stack-label
      />
      <q-input
        v-model="formData.password"
        :rules="[
          (val) =>
            val.length >= 3 || 'Please use minimum of 3 characters for name',
        ]"
        type="password"
        ref="password"
        lazy-rules
        outlined
        class="col"
        label="Password"
        stack-label
      />
    </div>
    <div class="row">
      <q-space />
      <q-btn color="primary" :label="tab" type="submit" />
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['tab'],
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    validateEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    submitform () {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError & !this.$refs.password.hasError) {
        if (this.tab === 'login') {
          this.loginUser(this.formData)
        } else {
          this.registerUser(this.formData)
        }
      }
    }
  },
  filters: {
    titleCase (value) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>

<style></style>
