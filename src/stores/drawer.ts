import { defineStore } from 'pinia';

export const useDrawerStore = defineStore(
    'drawer',
    () => {
        const leftDrawerOpen = ref<boolean>(false)

        const toggleLeftDrawer = () => {
            leftDrawerOpen.value = !leftDrawerOpen.value
        }

        return {
            leftDrawerOpen,
            toggleLeftDrawer,
        }
    }
)