<template>
    <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
        <q-toolbar>
            <q-btn z-max flat dense round @click="store.toggleLeftDrawer()" v-if="!$q.screen.gt.xs" aria-label="Menu" class="YL__drawer-button" icon="menu" />
            <q-btn size="sm" flat no-caps no-wrap class="YL__logo" v-if="$q.screen.gt.xs">
                <q-icon name="img:/img/logo.svg" class="YL__logo" />
            </q-btn>

            <q-space />

            <div class="YL__toolbar-input-container row no-wrap">
                <q-input dense outlined square v-model="search" placeholder="검색" class="bg-white col" />
                <q-btn class="YL__toolbar-input-btn" color="blue-2" text-color="blue-8" icon="search" unelevated />
            </div>

            <q-space />

            <div class="q-gutter-sm row items-center no-wrap">
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

const $q = useQuasar();

const store = useDrawerStore();

const search = ref('')
</script>