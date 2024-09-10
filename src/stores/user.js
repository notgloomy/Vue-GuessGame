import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const token = ref('dsjkdasldjlkas')
    const isToken = computed(() => {
        return token.value.length
    })
    const reset = () => {
        token.value = ''
    }
    return { token,isToken,reset }
})