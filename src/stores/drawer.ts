import { defineStore } from 'pinia';

export const useDrawerStore = defineStore(
    'drawer',
    () => {
        const $q = useQuasar();
        const leftDrawerOpen = ref<boolean>(false)

        const toggleLeftDrawer = () => {
            leftDrawerOpen.value = !leftDrawerOpen.value
            console.log(leftDrawerOpen.value);
        }

        const miniState = computed(() => {
            return $q.screen.width < 700;
        })
        

        return {
            leftDrawerOpen,
            toggleLeftDrawer,
            miniState,
        }
    }
)