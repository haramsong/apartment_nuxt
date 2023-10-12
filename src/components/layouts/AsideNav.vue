<template>
    <q-drawer :v-model="!miniState ? drawer : smallDrawer" :breakpoint="-1" :mini="!miniState ? leftDrawerOpen : !leftDrawerOpen" show-if-above bordered class="YL__drawer" :width="!miniState ? 260 : 160">
        <q-list padding>
            <q-btn z-max flat dense round @click="store.toggleLeftDrawer()" aria-label="Menu" class="YL__drawer-button" icon="menu" />
                <q-item v-for="link in links1" :key="link.text" class="YL__drawer-item"  v-ripple clickable>
                    <q-item-section avatar>
                        <q-icon color="white" :name="link.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ link.text }}</q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
    </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {  useDrawerStore } from '@/stores/drawer';
import { storeToRefs } from 'pinia';

const $q = useQuasar();

const store = useDrawerStore();

const drawer = computed(() => $q.screen.gt.xs);
const smallDrawer = computed(() => $q.screen.width < 300);

const { leftDrawerOpen } = storeToRefs(store);
const miniState = computed(() => store.miniState);

// watch(
//     miniState, () => {
//         if (miniState.value === true) {
//             leftDrawerOpen.value = true;
//         }
//         else {
//             leftDrawerOpen.value = false;
//         }
//     }
// )

const links1 = [
    { icon: 'home', text: 'Home' },
    { icon: 'whatshot', text: 'Trending' },
    { icon: 'subscriptions', text: 'Subscriptions' }
];
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
  
  &__drawer-button
    font-size: 1.5rem
    top: 0
    color: white

  &__drawer-footer-link
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000
</style>