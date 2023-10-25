<template>
    <q-drawer v-model="leftDrawerOpen" show-if-above :breakpoint="580" bordered class="YL__drawer" :width="230">
        <q-list>
          <EssentialLink
            v-for="link in essentialLinks"
            class="YL__drawer-item"
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

const essentialLinks = [
  {
    title: '홈',
    icon: 'home',
    link: '/',
    level: 0,
    children: []
  },
  {
    title: '소통공간',
    icon: 'assignment',
    link: '',
    level: 0,
    children: [
      {
        title: '주민게시판',
        link: '/community/boards/1',
        level: 1,
        children: []
      },
      {
        title: '나눔공간',
        link: '/community/shareplace/1',
        level: 1,
        children: []
      }
    ]
  },
  {
    title: '건의사항',
    icon: 'note_alt',
    link: '/complaint/1',
    level: 0,
    children: []
  }
]
</script>