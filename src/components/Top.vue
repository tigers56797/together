<template>
  <div class="top">
    <!-- 左側 LOGO -->
    <div class="top__left">
      <span class="logo"
        ><img src="@/assets/mainlogo.png" alt="mainlogo"
      /></span>
    </div>

    <!-- 中間 標題與描述 -->
    <div class="top__center">
      <p class="title">{{ title }}</p>
      <div class="topitemdeco">
        <p class="subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 動態標題與描述
const title = ref("紅紅 ❤️ 藍藍");
const subtitle = ref("相處 200 天");
</script>

<style scoped>
/* 📌 整體樣式 */
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #57b2d9;
  color: #fff;
  padding: 0px 15px;
  height: 140px;
  margin-top: -20px; /* 解決重疊問題 */
}

/* 📌 左側 LOGO */
.top__left {
  font-size: 1.5em;
  font-weight: bold;
}

.top__center {
  text-align: right; /* 讓文字內容靠右對齊 */
}

.title {
  display: block; /* 保持標題為獨立行 */
  margin: 0; /* 移除多餘間距 */
}

.topitemdeco {
  display: inline-flex; /* 讓內部內容水平排列 */
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 30px;
  background-color: #76c5e7; /* 白色透明背景 */
  border-radius: 100px;
  margin-top: 10px; /* 與標題保持適當間距 */
}

.top__center .subtitle {
  font-size: 1em;
  opacity: 0.8;
}

/* 📌 右側按鈕 */
.top__right {
  display: flex;
  gap: 10px;
}

.icon-btn {
  background: none;
  border: none;
  font-size: 1.5em;
  color: #fff;
  cursor: pointer;
}

.icon-btn:hover {
  opacity: 0.8;
}

.logo img {
  width: 130px;
  height: 100px;
}
</style>
