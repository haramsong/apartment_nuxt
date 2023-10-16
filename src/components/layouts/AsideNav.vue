<template>
    <q-drawer v-model="leftDrawerOpen" show-if-above :breakpoint="580" bordered class="YL__drawer" :width="260">
        <q-list>
          <q-item-label
            header
            class="text-grey-8">
            Essential Links
          </q-item-label>
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link">
          </EssentialLink>
        </q-list>
    </q-drawer>
</template>

<script setup lang="ts">
import {  useDrawerStore } from '@/stores/drawer';
import { storeToRefs } from 'pinia';
import EssentialLink from '/components/EssentialLink.vue'

const store = useDrawerStore();

const { leftDrawerOpen } = storeToRefs(store);


const links1 = [
    { icon: 'home', text: '홈' },
    { icon: 'whatshot', text: '주민게시판' },
    { icon: 'subscriptions', text: 'Subscriptions' }
];

const essentialLinks = [
  {
    title: 'Search', caption: 'quasar.dev', icon: 'school',
    link: 'https://quasar.dev',
    level: 0,
    children: [{
      title: 'Documents', caption: 'quasar.dev', icon: 'school',
      link: 'https://quasar.dev',
      level: 1,
      children: [{
        title: 'Search (level 3)',
        caption: 'quasar.dev',
        icon: 'school',
        link: 'https://quasar.dev',
        level: 2,
        children: []
      }]
    }]
  },
  {
    title: 'Github', caption: 'github.com/quasarframework',
    icon: 'code', link: 'https://github.com/quasarframework',
    level: 0,
    children: [{
      title: 'Github Level 2', caption: 'quasar.dev', icon: 'school',
      link: 'https://quasar.dev', level: 1,
      children: []
    }]
  },
  {
    title: 'Forum', caption: 'forum.quasar.dev',
    icon: 'record_voice_over', link: 'https://forum.quasar.dev',
    level: 0,
    children: [{
      title: 'Forum Level 2', caption: 'quasar.dev', icon: 'school',
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