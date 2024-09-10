<script setup>
const model = defineModel()
</script>
<template>
    <div class="slt">
    <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
    <input type="text" v-model="model">

</template>
<style scoped>
.slt{
    width: 800px;
    height: 400px;
    border-radius: 10px;
    margin: 5px;
    text-align: center;
}
</style>