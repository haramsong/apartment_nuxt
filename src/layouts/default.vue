<template>
    <q-layout view="hHh Lpr lff" class="bg-grey-1">
        <div>
            <LayoutsHeader />
            <LayoutsAsideNav />
            <q-page-container>
                <main class="container">
                    <template v-if="$route.path !== '/'">
                        <section class="page-header">
                            <div class="page-header__title">
                            <h2 class="sub_title1">
                                주민게시판
                            </h2>
                            </div>
                        </section>
                    </template>
                </main>
                <slot />
            </q-page-container>
        </div>
    </q-layout>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

