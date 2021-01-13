<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Scullery Manager
        </q-toolbar-title>

        <div class="q-g">Quasar -v:{{ $q.version }}  |  LoggedIn: {{loggedIn}}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-separator class="" />
      <q-list>
        <q-item-label header class="text-grey-8">
          <div class="column items-center q-mb-md">
            <q-avatar class="q-mg-md" style="width: 250px; height: 250px; border-radius: 100%;">
              <img class="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnfeF0Z5XSAwfpvN3w2WSj_iIOnStlE1bpQ&usqp=CAU">
            </q-avatar>
          </div>
        </q-item-label>
      </q-list>
      <q-separator class="" />

      <EssentialLink
        v-for="link in essentialLinks"
        :to="link.to"
        :key="link.title"
        v-bind="link"
      />

      <q-separator />

      <q-item
        clickable
        @click="logoutUser()"
        class="row self-end q-mt-xl text-grey-4"
      >
        <q-item-section
          avatar
          size="md"
        >
          <q-icon name="directions_run" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Sign out</q-item-label>
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>

      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Dashboard',
    icon: 'home',
    to: '/'
  },
  {
    title: 'Alerts',
    icon: 'notifications_none',
    to: '/alerts'
  },
  {
    title: 'Reports',
    icon: 'insights',
    to: '/reports'
  },
  {
    title: 'Manage',
    icon: 'tune',
    to: '/manage'
  },
  {
    title: 'Sync',
    icon: 'sync',
    to: '/sync'
  },
  {
    title: 'Settings',
    icon: 'settings',
    to: '/settings'
  }
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },

  computed: {
    ...mapState('auth', ['loggedIn'])
  },

  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>
<style lang="scss">
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}

</style>
