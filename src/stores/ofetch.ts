import { defineStore } from 'pinia';
import { IFetchAbortCtrls } from '~/@types/fetch';

export const useFetchStore = defineStore(
    'fetch',
    () => {
        const abortCtrls = ref<IFetchAbortCtrls>({});
        const appendAbortCtrl = (ctrl: any, key?: string) => {
            console.log('appendAbortCtrl - key: ', key);
            if (key) {
                abortCtrls.value[key] = ctrl
            }
        }

        return {
            abortCtrls,
            appendAbortCtrl,
        }
    }
)