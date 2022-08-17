<template>
  <div class="profile pa-6">
    <h1>This is an ABOUT page</h1>

    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <v-text-field
          v-model="firstname"
          :counter="25"
          :rules="nameRules"
          label="Vorname"
          required
      ></v-text-field>

      <v-text-field
          v-model="lastname"
          :counter="25"
          :rules="nameRules"
          label="Nachname"
          required
      ></v-text-field>

      <v-text-field
          v-model="phonenumber"
          :rules="phoneRule"
          label="Telefonnummer"
          required
      ></v-text-field>


      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
      ></v-checkbox>

      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
      >
        Validate
      </v-btn>

      <v-btn
          color="error"
          class="mr-4"
          @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
          color="warning"
          @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 25) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    phonenumber:'',
    phoneRule:[
      v => !!v || 'Phone Number is required',
      v => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(v) || 'Phone Number must be valid, no spaces needed'
    ],
    checkbox: false,
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>