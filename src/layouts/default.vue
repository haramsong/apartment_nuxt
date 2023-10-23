<template>
    <q-layout view="hHh Lpr lff" class="bg-grey-1">
        <div>
            <LayoutsHeader />
            <LayoutsAsideNav />
            <q-page-container>
                <q-scroll-area
                    visible
                    class="scroll-area q-mb-xl"
                    :thumb-style="thumbStyle"
                    :bar-style="barStyle"
                >
                    <slot />
                </q-scroll-area>
            </q-page-container>
        </div>
    </q-layout>
</template>

<script setup>
// 스크롤 바 스타일
const thumbStyle = {
    right: '4px',
    borderRadius: '5px',
    backgroundColor: '#d50000',
    width: '5px',
    opacity: 0.75,
};
const barStyle = {
    right: '2px',
    borderRadius: '9px',
    backgroundColor: '#d50000',
    width: '9px',
    opacity: 0.2,
};
</script>