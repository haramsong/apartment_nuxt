<template>
    <q-layout view="hHh Lpr lff" class="bg-grey-1">
        <div>
            <LayoutsHeader />
            <LayoutsAsideNav />
            <q-page-container>
                <slot />
            </q-page-container>
        </div>
    </q-layout>
</template>

