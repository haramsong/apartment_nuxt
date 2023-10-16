import { defineStore } from 'pinia';

export const useDrawerStore = defineStore(
    'drawer',
    () => {
        const leftDrawerOpen = ref<boolean>(true)

        const toggleLeftDrawer = () => {
            leftDrawerOpen.value = !leftDrawerOpen.value
            console.log(leftDrawerOpen.value);
        }

        return {
            leftDrawerOpen,
            toggleLeftDrawer,
        }
    }
)