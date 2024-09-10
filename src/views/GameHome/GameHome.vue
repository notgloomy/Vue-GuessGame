<script setup>
import { ref } from 'vue'
const gameList = ref([
        {
          id: 1,
          image: "/src/assets/cloth.png",
        },
        {
          id: 2,
          image: "/src/assets/scissors.png",
        },
        {
          id: 3,
          image: "/src/assets/stone.png"
        }
])
const text = ref('谁能赢?')
const index = ref(0)
const score = ref(0)
const time = ref('')
const inter = function () {
    time.value = setInterval(() => {
    index.value++;
    if (index.value === 3) {
        index.value = 0
    }
}, 100)
}
inter()

const isButtonDisabled = ref(true)
const add = (id) => {
    let userPic = document.querySelector("#buffer")
    if (userPic.src !== '/src/assets/buffer.gif') {
        userPic.src = gameList.value[id-1].image  // 选择用户端的出手选择
        clearInterval(time.value) // 销毁定时器 让电脑端呈现出手选择
        // 1 0  布
        // 2 1  剪刀
        // 3 2  石头
        switch (index.value) {
            case 0: if (id - index.value === 1) {
                text.value = '平局'
            } else if (id - index.value === 2) {
                text.value = '玩家赢了'
                score.value++
            } else if (id - index.value === 3) {
                text.value = '电脑赢了'
            }
            case 1: if (id - index.value === 0) {
                text.value = '电脑赢了'
            } else if (id - index.value === 1) {
                text.value = '平局'
            } else if (id - index.value === 2) {
                text.value = '玩家赢了'
                score.value++
            }
            case 2:if (id - index.value === -1) {
                text.value = '玩家赢了'
                score.value++
            } else if (id - index.value === 0) {
                text.value = '电脑赢了'
            } else if (id - index.value === 1) {
                text.value = '平局'
            }
        }
    }
    
    // console.log(gameList.value[id-1].image);
}
const reset = () => {
    text.value = '谁能赢?'
    let userPic = document.querySelector("#buffer")
    userPic.src = '/src/assets/buffer.gif'
    inter()
   }

</script>

<template>
 <div class="game">
    <h1>石头剪刀布</h1>
    <div class="gamebody">
        <div class="header">你已经获胜了<span class="win">{{ score }}</span>次</div>
        <div class="race">
            <img src="/src/assets/buffer.gif" id="buffer" />
            <div class="win top">{{ text }}</div>
            <img :src="gameList[index].image" id="cloth"/> 
        </div>
        <div class="select">
            <img :src="item.image" v-for="item in gameList" :key="item.id" class="selt" @click="add(item.id)">
        </div>
        <div class="btn">
            <button class="reset" @click="reset">再来一局</button>
        </div>
    </div>
 </div>
 <button :disabled="isButtonDisabled">Button</button>
</template>

<style>
.game{
    width: 800px;
    height: 650px;
    border: 1px solid black;
    margin: 0 auto;
    text-align: center;
}
.gamebody{
    width: 600px;
    height: 500px;
    border: 1px solid red;
    margin: 0 auto;
}
.win{
    color:red;
}
.race{
    width: 450px;
    height: 180px;
    margin: 0 auto;
    display: flex;
    align-items: center;
}
#buffer,#cloth{
    width: 150px;
    height: 150px;
    margin-left: 20px;
}
.race .top{
   margin-left:30px;
}
.reset{
    width: 200px;
    height: 50px;
    background-image: linear-gradient(to right, #ff00ad, #f09876);
    margin: 0 auto;
    line-height: 50px;
    color: #fff;
    border-radius: 10px;
    border: 0;
    
}
</style>