<template>
  <div class="countdown">
    <!-- 讓 topfield 部分始終顯示 -->
    <div class="topfield">
      <header class="header">
        <button class="topbarbutton" @click="goBack">
          <img src="@/assets/backarrow.png" alt="" class="backarrow" />
        </button>
        <div class="countdownname">回憶寶箱</div>
        <button class="topbarbutton" @click="goBack">
          <img src="@/assets/addicon.png" alt="" class="addicon" />
        </button>
      </header>
    </div>

    <section class="main">
      <p>新增一個共同回憶吧！</p>
      <ul class="event-list">
        <li>
          <div class="memorybox">
            <div class="boxA"></div>
            <div class="boxA"></div>
            <div class="boxA"></div>
          </div>
        </li>
      </ul>
    </section>

    <MainBar />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router"; // 引入 useRouter
import MainBar from "../pages/MainBar.vue";

// 获取 router 实例
const router = useRouter();

// 计算属性：获取所有事件和选中的事件
const events = computed(() => countdownStore.events);
const selectedEvent = computed(() => countdownStore.selectedEvent);

// 返回上一页
const goBack = () => {
  router.back(); // 调用 Vue Router 的 back() 方法返回上一页
  console.log("Go back!");
};
</script>

<style scoped>
/* 清除所有元素的默认边距和内边距 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0 !important; /* 清除 body 的默认边距 */
  padding: 0 !important; /* 清除 body 的默认内边距 */
  height: 100% !important; /* 确保 html 和 body 占据满屏 */
}

.boxA {
  width: 100%;
  height: 140px;
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: #fff;
}

.topfield {
  background-color: linear-gradient(to right, #edf3fa, #f8ebeb); /* 渐变背景 */
  width: 100% !important;
  height: 200px !important;
  margin: 0 !important; /* 去除外部边距 */
  padding: 0 !important; /* 去除内边距 */
  display: flex !important; /* 使用 flex 布局 */
  flex-direction: column; /* 垂直排列内容 */
  justify-content: center !important; /* 垂直居中内容 */
  align-items: center !important; /* 水平居中内容 */
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  width: 100%; /* 确保宽度为 100% */
  margin: 0; /* 去除外部间距 */
  padding: 0 15px; /* 去除内边距 */
}

.countdownname {
  color: #fff;
}

.main {
  border-radius: 30px 30px 0 0; /* 設置主內容的上方圓角 */
  margin-top: -20px; /* 主內容向上移，覆蓋 Header 的部分 */
  margin-bottom: 0%;
  padding-bottom: 100%; /* 預留與底部導航欄一致的空間 */
}

.days-remaining {
  display: flex; /* 使用 flex 布局 */
  flex-direction: column; /* 垂直排列内容 */
  justify-content: center; /* 在上下方向居中 */
  align-items: center; /* 水平居中 */
  text-align: center;
  margin-top: 5px; /* 上边距 */
  margin-bottom: 5px; /* 下边距 */
  color: white;
}

.event-list {
  list-style: none;
  padding: 0;
  padding: 15px;
}

.event-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

.target-date {
  color: #828282;
}

.days-box {
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 30px;
  border-radius: 50px;
  font-weight: bold;
  background-color: #84b584;
}

.nav-button {
  color: #555;
  text-decoration: none;
  font-size: 14px;
}

.backarrow,
.addicon {
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
}

.topbarbutton {
  border: none;
  outline: none;
}
</style>
