<template>
  <v-app id="inspire">
    <v-navigation-drawer
        location="left"
        class="bg-blue-accent-4"
        theme="dark"
        v-model="drawer"
        app
    >
      <template v-slot:prepend>
        <v-list-item
            two-line
            prepend-avatar="logo.png"
            title="Hans Muster"
            subtitle="Logged in"
        ></v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" :to="{name: 'HomeView'}"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account" ></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users" ></v-list-item>
        <v-list-item prepend-icon="mdi-information" title="About" value="about" :to="{name: 'AboutView'}"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
<!--    <v-navigation-drawer
        class="bg-blue-accent-4"
        theme="dark"
        v-model="drawer"
        app
    >
      <v-list color="transparent">
        <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>-->

    <v-app-bar
        app
        color="primary"
        image="lake.jpg"
        density="prominent"
    >
      <template v-slot:image>
        <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Vuetify ToDo</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'My Account', icon: 'mdi-account'},
      { title: 'Users', icon: 'mdi-account-group-outline'},
      { title: 'About', icon: 'mdi-information'},
    ],
  }),
}
</script>