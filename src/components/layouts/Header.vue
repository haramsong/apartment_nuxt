<template>
    <header class="sc-header">
        <div class="flex-btw-wrap">
            <div class="left-contents">
                <button type="button" class="m-gnb-toggle-btn" @click="store.toggleLeftDrawer()" v-if="!$q.screen.gt.xs">햄버거버튼</button>
            </div>
            <div class="center-contents">
                <h1 class="sc-logo">
                    <a href="">
                        <img src="/img/logo.svg" />
                    </a>
                </h1>
            </div>
            <div class="right-contents"></div>
        </div>
    </header>
    <!-- <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
        <q-toolbar>
            <q-btn z-max flat dense round aria-label="Menu" class="YL__drawer-button" icon="menu" />
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
                    <q-avatar size="35px">
                        <img src="/img/person-circle-sharp.svg">
                    </q-avatar>
                    <q-tooltip>내 계정</q-tooltip>
                </q-btn>
            </div>
        </q-toolbar>
    </q-header> -->
</template>

<script setup lang="ts">
import { fabYoutube } from '@quasar/extras/fontawesome-v6';
import { useDrawerStore } from '@/stores/drawer';

const $q = useQuasar();

const store = useDrawerStore();

const search = ref('')
</script>