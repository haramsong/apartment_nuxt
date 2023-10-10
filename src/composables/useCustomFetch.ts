import type { UseFetchOptions } from 'nuxt/app';
import { defu } from 'defu';
import { useFetchStore } from '~/stores/ofetch';

export function useCustomFetch<T> (url: string, options: UseFetchOptions<T> = {}, useCache = false) {
    const fetchStore = useFetchStore();
    const abortController = new AbortController();

    const defaults: UseFetchOptions<T> = {
        key: useCache ? url: ((+new Date()) + Math.random() * 100).toString(32),
        watch: false,
        signal: abortController.signal
    };

    fetchStore.appendAbortCtrl(abortController, defaults.key);

    const params = defu(options, defaults);

    return useFetch(url, params);
}