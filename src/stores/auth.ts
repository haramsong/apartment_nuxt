import { defineStore } from 'pinia';

export const useAuthStore = defineStore(
    'auth',
    () => {
        const userStatus = ref<boolean>(false)
        

        return {
            userStatus,
        }
    }
)