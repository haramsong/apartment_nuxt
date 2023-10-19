<template>
    <div>
        <div v-if="children.length == 0">
            <q-item clickable v-ripple :inset-level="level">
                <q-item-section v-if="!!icon">
                    <q-icon :name="icon" />    
                </q-item-section>
                <q-item-section>{{ title }}</q-item-section>
            </q-item>
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
            type: Array,
            default: []
        }
    })
</script>