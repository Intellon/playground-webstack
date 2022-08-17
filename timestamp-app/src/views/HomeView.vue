<template>
  <div class="home pa-6">
    <h1>This is an HOME page</h1>

    <div>
      <h2 class="text-center mb-3">{{ timestamps }}</h2>
      <h2 class="text-center mb-3">{{ workinghours }}</h2>
      <ul class="list-group">
        <li class="list-group-item" v-show="date"><strong>Date:</strong> {{ date }}</li>
        <li class="list-group-item" v-show="time"><strong>Time:</strong> {{ time }}</li>
      </ul>
    </div>

    <v-btn
        class="ma-2"
        :loading="loading"
        :disabled="loading"
        color="blue"
        @click="loader = 'loading';saveCurrentTimestampToDatabase(); isShowBegin = false"
        v-if="isShowBegin === true"
    >
      Schichtbeginn
    </v-btn>
    <v-btn
        class="ma-2"
        :loading="loading1"
        :disabled="loading1"
        color="blue-grey"
        @click="loader = 'loading1';saveCurrentTimestampToDatabase(); calculateWorkingHours(); isShowEnd = false"
        v-if="isShowEnd === true"
    >
      Schichtende
    </v-btn>

  </div>
</template>

<script>
export default {
  name:'Home',
  data () {
    return {
      isShowBegin: true,
      isShowEnd: true,
      workinghours: '',
      timestamps:[],
      date: '',
      time: '',
      loader: null,
      loading: false,
      loading1: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1500)

      this.loader = null
    },
  },
  methods: {
    saveCurrentTimestampToDatabase(){
      let newTimeStamp = {
        id: Date.now(),
        timeStampCreator: 'currentUser',
        employeeTimestamp: 'secondUser',
        dateTimeFormat: this.printDate()+" / "+ this.printTime(),
      }
      this.timestamps.push(newTimeStamp);

    },
    printDate(){
      return new Date().toLocaleDateString('de');
    },
    printTime(){
      return new Date().toLocaleTimeString('de', {timeStyle: 'short'});
    },
    calculateWorkingHours(){
      this.workinghours = '8 Stunden'
      console.log("Teststststs")
      return '6 Stunden'
    }
  },
  mounted(){
    this.date = this.printDate();
    this.time = this.printTime();
  },
}
</script>
