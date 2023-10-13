<template>
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
        <q-toolbar>
            <q-btn z-max flat dense round @click="store.toggleLeftDrawer()" aria-label="Menu" class="YL__drawer-button" icon="menu" />
            <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
                <q-icon :name="fabYoutube" color="red" size="28px" />
                <q-toolbar-title shrink class="text-weight-bold">
                    YouTube
                </q-toolbar-title>
            </q-btn>

            <q-space />

            <div class="YL__toolbar-input-container row no-wrap">
                <q-input dense outlined square v-model="search" placeholder="Search" class="bg-white col" />
                <q-btn class="YL__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search" unelevated />
            </div>

            <q-space />

            <div class="q-gutter-sm row items-center no-wrap">
                <q-btn round dense flat color="grey-8" icon="video_call" v-if="$q.screen.gt.sm">
                    <q-tooltip>Create a video or post</q-tooltip>
                </q-btn>
                <q-btn round dense flat color="grey-8" icon="apps" v-if="$q.screen.gt.sm">
                    <q-tooltip>Apps</q-tooltip>
                </q-btn>
                <q-btn round dense flat color="grey-8" icon="message" v-if="$q.screen.gt.sm">
                    <q-tooltip>Messages</q-tooltip>
                </q-btn>
                <q-btn round dense flat color="grey-8" icon="notifications">
                    <q-badge color="red" text-color="white" floating>
                        2
                    </q-badge>
                    <q-tooltip>Notifications</q-tooltip>
                </q-btn>
                <q-btn round flat>
                    <q-avatar size="26px">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                    </q-avatar>
                    <q-tooltip>Account</q-tooltip>
                </q-btn>
            </div>
        </q-toolbar>
    </q-header>
</template>

<script setup lang="ts">
import { fabYoutube } from '@quasar/extras/fontawesome-v6';
import { useDrawerStore } from '@/stores/drawer';
import { storeToRefs } from 'pinia';

const $q = useQuasar();

const store = useDrawerStore();

const drawer = computed(() => $q.screen.gt.xs);
const smallDrawer = computed(() => $q.screen.width < 300);

const { leftDrawerOpen } = storeToRefs(store);

const search = ref('')


// const { leftDrawerOpen } = storeToRefs(store);
</script>

<style lang="sass">
.YL

  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__drawer-button
    font-size: 1rem
    top: 0

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%

    &:hover
      color: #000
</style>