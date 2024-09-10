<script setup>
import { ref } from 'vue'
import GameLogin from '@/components/ChildrenTest.vue'
import { computed, watch } from 'vue';
import { useCounterStore } from '@/stores/counter.js'
import { useUserStore } from '@/stores/user.js'
const msg = ref('hello world')
const myData = ref([1, 2, 3])

const counterStore = useCounterStore()
const useStore = useUserStore()

const clickHandler = () => {
    myData.value.push(10)
}
const computedHander = computed(() => {
    return myData.value.length
})
watch( () => myData.value.length, (newValue, oldValue) => {
    console.log(newValue,oldValue);
    
})
</script>
<template>
    <div>我是登录页</div>
    <h1>{{ myData }}</h1>
    <button @click="clickHandler">change</button>
    <div>{{ computedHander }}</div>
    <div>{{ counterStore.count }}</div>
    <div>{{ counterStore.doubleCount }}</div>
    <button @click="counterStore.increment">+1</button>
    <div>{{ useStore.token }}</div>
    <div>{{ useStore.isToken }}</div>
    <button @click="useStore.reset">重置</button>
</template>