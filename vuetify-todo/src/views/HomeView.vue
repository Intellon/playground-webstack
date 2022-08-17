<template>
  <div class="home">
  <v-text-field
      v-model:clearable="newTaskTitle"
      @keyup.enter="createTask"
      class="pa-3"
      label="Add Task"
      prepend-inner-icon="mdi-plus"
      variant="solo"
      hide-details
      clearable
  ></v-text-field>

  <v-list
      select-strategy="multiple"
      class="pt-0"
  >
    <div
        v-for="tasks in tasks"
        :key="tasks.id"
    >

      <v-list-item
        @click="doneTask(tasks.id)"
        :class="{'blue': tasks.done}"

      >
        <template v-slot:prepend>
          <v-list-item-action start>
            <v-checkbox-btn :model-value="tasks.done"></v-checkbox-btn>
          </v-list-item-action>
        </template>

        <template v-slot:append>
          <v-btn
              color="primary"
              icon="mdi-delete"
              @click.stop="deleteTask(tasks.id)"
          ></v-btn>
        </template>

        <v-list-item-title :class="{'text-decoration-line-through': tasks.done}" >{{tasks.title}}</v-list-item-title>

      </v-list-item>

      <v-divider></v-divider>
    </div>
  </v-list>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      newTaskTitle: 'test',
      tasks: [
        {
          id: 1,
          title: 'Wake up',
          done: false
        },
        {
          id: 2,
          title: 'Teds up',
          done: false
        },
        {
          id: 3,
          title: 'dfgdfg up',
          done: false
        }
      ]
    }
  },
  methods:{
    createTask(){
      let newTask = {
        id: Date.now(),
        title: this.newTaskTitle,
        done:false
      }
      this.tasks.push(newTask)
      this.newTaskTitle = ''
    },
    doneTask(id){
      console.log('id: ', id)
      let task = this.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },
    deleteTask(id){
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
});
</script>
