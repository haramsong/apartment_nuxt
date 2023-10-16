<template>
    <q-drawer v-model="leftDrawerOpen" show-if-above :breakpoint="580" bordered class="YL__drawer" :width="260">
        <q-list>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link">
          </EssentialLink>
        </q-list>
    </q-drawer>
    <q-page-container>
        <router-view />
    </q-page-container>
</template>

<script setup lang="ts">
import {  useDrawerStore } from '@/stores/drawer';
import { storeToRefs } from 'pinia';
import EssentialLink from '/components/EssentialLink.vue'

const store = useDrawerStore();

const { leftDrawerOpen } = storeToRefs(store);

const essentialLinks = [
  {
    title: 'Search', icon: 'school',
    link: 'https://quasar.dev',
    level: 0,
    children: [{
      title: 'Documents', icon: 'school',
      link: 'https://quasar.dev',
      level: 1,
      children: []
    }]
  },
  {
    title: 'Github',
    icon: 'code', link: 'https://github.com/quasarframework',
    level: 0,
    children: [{
      title: 'Github Level 2', icon: 'school',
      link: 'https://quasar.dev', level: 1,
      children: []
    }]
  },
  {
    title: 'Forum',
    icon: 'record_voice_over', link: 'https://forum.quasar.dev',
    level: 0,
    children: [{
      title: 'Forum Level 2', icon: 'school',
      link: 'https://quasar.dev',
      level: 1,
      children: []
    }]
  }
]
</script>

<style lang="sass">
.YL
  
  &__drawer
    background-color: #0079BB
    padding-top: 2rem
    
  &__drawer-item
    font-size: 1.5rem
    margin: 1.5rem 0
    padding: 1rem
    color: white
  

  &__drawer-footer-link
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>