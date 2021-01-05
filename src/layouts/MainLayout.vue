<template>
  <q-layout view="lHh Lpr lFf">
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

        <!-- <div>{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        <div class="column items-center q-mb-md">
          <q-avatar class="q-mg-md" size="250px">
            <img class="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBnfeF0Z5XSAwfpvN3w2WSj_iIOnStlE1bpQ&usqp=CAU">
          </q-avatar>
        </div>
        <div class="row items-center justify-center  q-mb-md">
          <strong class="text-h6 text-grey-4">Welcome:</strong>
          <q-chip>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
              John
          </q-chip>
        </div>
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :to="link.to"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>

      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
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
    to: 'sync'
  },
  {
    title: 'Settings',
    icon: 'settings',
    to: '/settings'
  },
  {
    title: 'Sign Out',
    icon: 'self_improvement',
    to: '/auth'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
