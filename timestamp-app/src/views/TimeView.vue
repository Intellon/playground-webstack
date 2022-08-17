<template>
  <div class="time pa-6">
    <h1>This is an TIME page</h1>

    <v-autocomplete
      v-model="employeeselector"
      :items="employees"
      label="Select or Search"
      multiple
      chips
      deletable-chips
      clearable
      hint="Please choose an Employee"
      persistent-hint
    ></v-autocomplete>

    <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading || this.employeeselector.length === 0"
        color="blue"
        @click="loader = 'loading'"
    >
      Schichtbeginn
    </v-btn>

    <v-simple-table v-if="this.viewer"
                    class="elevation-1"
                    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Datum
          </th>
          <th class="text-left">
            Zeit
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="emp in employeeselector"
            :key="emp"
        >
          <td>{{ emp }}</td>
          <td>{{ date }}</td>
          <td>{{ time }}</td>

        </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>
<script>
export default {
  data () {
    return {
      date: '',
      time: '',
      employeeselector: [],
      loader: null,
      loading: false,
      viewer: false,
      employees: [
        'Fabio Hübscher','Kieren Leon','Marcel Wilson','Jake Cline','Reggie Cope','Kiri Kemp','Randall Pritchard','Amelia Mccarthy',
        'Fahmida Boyce','Diya Appleton','Miya Mackenzie','Cara Mcgregor','May Maxwell','Shanelle Noel','Janine Huerta',
        'Zakariyya Broughton','Shanaya Chapman','Harlee Griffith','Skyla Huffman','Kunal Cash','Carl Pineda','Nick Kearns',
        'Kylan Novak','Siddharth Gregory','Allan Romero','Jodie Hopper'
      ]
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false, this.viewer = true), 1500)
      this.loader = null
    }
  },
  methods: {
    printDate(){
      return new Date().toLocaleDateString('de');
    },
    printTime(){
      return new Date().toLocaleTimeString('de', {timeStyle: 'short'});
    }
  },
  mounted(){
    this.date = this.printDate();
    this.time = this.printTime();
  }
}
</script>

