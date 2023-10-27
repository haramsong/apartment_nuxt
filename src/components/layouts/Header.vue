<template>
    <header class="sc-header">
        <div class="flex-btw-wrap">
            <div class="left-contents">
                <button type="button" class="gnb-toggle-btn" @click="store.toggleLeftDrawer()" v-if="!$q.screen.gt.xs">햄버거버튼</button>
            </div>
            <div class="center-contents">
                <h1 class="sc-logo">
                    <a href="">
                        <img src="/img/logo/logo.svg" alt="starclass" />
                    </a>
                </h1>
            </div>
            <div class="right-contents">
                <ul class="icon-btns-wrap">
                    <li class="icon-btn-list">
                        <button type="button" class="icon-btn"><IconSearch /><span class="voice-only">검색창 열기</span></button>
                    </li>
                    <li class="icon-btn-list">
                        <button type="button" class="icon-btn"><IconBall /><span class="voice-only">알림 보기</span></button>
                    </li>
                    <li class="icon-btn-list">
                        <button type="button" class="icon-btn mypage-btn">
                            <img src="/img/img/img_profile.png" alt="프로필 기본" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <ModalAlert />
    </header>
</template>

<script setup lang="ts">
import { fabYoutube } from '@quasar/extras/fontawesome-v6';
import { useDrawerStore } from '@/stores/drawer';

const $q = useQuasar();

const store = useDrawerStore();

const search = ref('')
</script>