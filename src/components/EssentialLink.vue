<template>
    <div>
        <div v-if="children.length === 0">
            <nuxt-link
              style="text-decoration: none; color: inherit"
              :to="{
                  path: `${link}`
              }"
            >
                <q-item clickable v-ripple :inset-level="level">
                    <div :class="level === 0 && 'drawer-item-width'">
                        <q-item-section v-if="!!icon" class="YL__drawer-item_icon">
                            <q-icon v-if="!!icon" :name="icon" />    
                        </q-item-section>
                    </div>
                    <q-item-section v-if="level === 0" class="YL__drawer-item_text">{{ title }}</q-item-section>
                    <q-item-section v-else class="YL__drawer-item_text-sub">{{ title }}</q-item-section>
                </q-item>
            </nuxt-link>
        </div>
        <div v-else>
            <!-- {{children}} -->
            <q-expansion-item 
                expand-separator 
                :icon="icon" 
                :label="title" 
                :header-inset-level="level"
                default-closed
            >
                <EssentialLink v-for="child in children" :key="child" v-bind="child" />
                <!-- </EssentialLink> -->
            </q-expansion-item>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            default: '#'
        },
        icon: {
            type: String,
            default: ''
        },
        level: {
            type: Number,
            default: 0
        },
        children: {
            type: Object,
            default: {}
        }
    })
</script>