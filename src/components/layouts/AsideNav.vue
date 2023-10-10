<template>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="YL__drawer" :width="260">
        <q-scroll-area class="fit">
            <q-list padding>
                <q-item v-for="link in links1" :key="link.text" class="YL__drawer-item" v-ripple clickable>
                    <q-item-section avatar>
                        <q-icon color="white" :name="link.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ link.text }}</q-item-label>
                    </q-item-section>
                </q-item>
<!-- 
                <q-separator class="q-my-md" />

                <q-item v-for="link in links2" :key="link.text" v-ripple clickable>
                    <q-item-section avatar>
                        <q-icon color="grey" :name="link.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ link.text }}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator class="q-mt-md q-mb-xs" />

                <q-item-label header class="text-weight-bold text-uppercase">
                    More from Youtube
                </q-item-label>

                <q-item v-for="link in links3" :key="link.text" v-ripple clickable>
                    <q-item-section avatar>
                        <q-icon color="grey" :name="link.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ link.text }}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator class="q-my-md" />

                <q-item v-for="link in links4" :key="link.text" v-ripple clickable>
                    <q-item-section avatar>
                        <q-icon color="grey" :name="link.icon" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>{{ link.text }}</q-item-label>
                    </q-item-section>
                </q-item>

                <q-separator class="q-mt-md q-mb-lg" /> -->

                <!-- <div class="q-px-md text-grey-9">
                    <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                        <a v-for="button in buttons1" :key="button.text" class="YL__drawer-footer-link"
                            href="javascript:void(0)">
                            {{ button.text }}
                        </a>
                    </div>
                </div>
                <div class="q-py-md q-px-md text-grey-9">
                    <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
                        <a v-for="button in buttons2" :key="button.text" class="YL__drawer-footer-link"
                            href="javascript:void(0)">
                            {{ button.text }}
                        </a>
                    </div>
                </div> -->
            </q-list>
        </q-scroll-area>
    </q-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {  useDrawerStore } from '@/stores/drawer';
import { storeToRefs } from 'pinia';

const store = useDrawerStore();

const { leftDrawerOpen } = storeToRefs(store);

// name: 'MyLayout',

// setup() {
// const leftDrawerOpen = ref<boolean>(false)
const search = ref('')

// function toggleLeftDrawer() {
//     leftDrawerOpen.value = !leftDrawerOpen.value
// }

const links1 = [
    { icon: 'home', text: 'Home' },
    { icon: 'whatshot', text: 'Trending' },
    { icon: 'subscriptions', text: 'Subscriptions' }
];

// return {
//     fabYoutube,

//     leftDrawerOpen,
//     search,

//     toggleLeftDrawer,

//     links1: [
//         { icon: 'home', text: 'Home' },
//         { icon: 'whatshot', text: 'Trending' },
//         { icon: 'subscriptions', text: 'Subscriptions' }
//     ],
//     links2: [
//         { icon: 'folder', text: 'Library' },
//         { icon: 'restore', text: 'History' },
//         { icon: 'watch_later', text: 'Watch later' },
//         { icon: 'thumb_up_alt', text: 'Liked videos' }
//     ],
//     links3: [
//         { icon: fabYoutube, text: 'YouTube Premium' },
//         { icon: 'local_movies', text: 'Movies & Shows' },
//         { icon: 'videogame_asset', text: 'Gaming' },
//         { icon: 'live_tv', text: 'Live' }
//     ],
//     links4: [
//         { icon: 'settings', text: 'Settings' },
//         { icon: 'flag', text: 'Report history' },
//         { icon: 'help', text: 'Help' },
//         { icon: 'feedback', text: 'Send feedback' }
//     ],
//     buttons1: [
//         { text: 'About' },
//         { text: 'Press' },
//         { text: 'Copyright' },
//         { text: 'Contact us' },
//         { text: 'Creators' },
//         { text: 'Advertise' },
//         { text: 'Developers' }
//     ],
//     buttons2: [
//         { text: 'Terms' },
//         { text: 'Privacy' },
//         { text: 'Policy & Safety' },
//         { text: 'Test new features' }
//     ]
// }
// }

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