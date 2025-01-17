<template>
  <div class="important-memory">
    <!-- 使用 router-link 包裹需要跳转的内容 -->
    <router-link to="/memory">
      <h2 class="title">回憶百寶箱</h2>
      <p class="importcontent">是這一天的回憶</p>
      <div class="memory-card">
        <div class="memory-content">
          <img
            src="@/assets/mainpica.png"
            alt="mainpica"
            class="memory-image"
          />
          <div class="memorybottom">
            <img src="@/assets/person.png" alt="person" class="person" />
            <div class="importdetail">
              <div class="middle">
                <h3 class="memory-title">{{ memory.title }}</h3>
                <span class="memory-date">{{ memory.date }}</span>
              </div>
              <p class="memory-description">{{ memory.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 單個重要記事的數據
const memory = ref({
  title: "煮火鍋材料",
  date: "2025-01-09",
  description: "準備所有的火鍋材料，並檢查是否齊全。",
});
</script>

<style scoped>
.important-memory {
  background-color: #fff;
  text-decoration: none;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding: 0 20px;
  font-family: Arial, sans-serif;
  width: 100%;
  box-sizing: border-box; /* 確保 padding 不影響寬度計算 */
}
.important-memory a {
  text-decoration: none; /* 確保去掉超鏈接的底線 */
  cursor: pointer;
  display: block;
}

.important-memory a:hover {
  text-decoration: none; /* 防止懸停時仍然顯示底線 */
}

.title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 0;
}

.importcontent {
  color: #999;
  font-size: 14px;
  margin: 0;
  padding: 0;
}

.importantdetail {
  flex: 1; /* 撐滿剩餘空間 */
  display: flex;
  flex-direction: column; /* 垂直排列子元素 */
  justify-content: center; /* 子元素垂直居中 */
  align-items: flex-start; /* 子元素靠左對齊 */
  width: 100%; /* 設置寬度為 100% */
  box-sizing: border-box; /* 確保 padding 不影響寬度 */
}

.person {
  width: 50px !important;
  height: 50px !important; /* 修正高度為正值，確保圖片可見 */
  border-radius: 50% !important; /* 圆形效果 */
  object-fit: cover !important; /* 确保图片按比例填充并裁剪 */
  overflow: hidden !important;
  flex-shrink: 0 !important;
}

.memorybottom {
  display: flex;
  gap: 10px; /* 子元素之間的間距 */
  align-items: center; /* 垂直置中 */
  justify-content: start; /* 子元素靠左對齊 */
  width: 100%; /* 撐滿父容器 */
  box-sizing: border-box; /* 確保 padding 不影響寬度 */
}

.memory-card {
  display: flex;
  flex-direction: column; /* 確保子元素垂直排列 */
  align-items: flex-start; /* 子元素靠左對齊 */
  justify-content: start;
  width: 100%;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden; /* 防止子元素放大超出容器范围 */
}

/* 記事內容的佈局 */
.memory-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden; /* 隐藏子元素超出的部分 */
  position: relative;
}

/* 圖片樣式 */
.memory-content img {
  width: 100%; /* 圖片填滿父容器寬度 */
  height: auto; /* 根據圖片比例自動調整高度 */
  max-height: 200px; /* 設置圖片的最大高度，防止圖片過高 */
  object-fit: cover; /* 確保圖片填滿容器並裁剪多餘部分 */
  border-radius: 8px 8px 0 0; /* 保持圓角設計 */
  margin-bottom: 10px; /* 與其他內容的間距 */
  transition: transform 0.3s ease-in-out; /* 添加平滑过渡效果 */
}

/* 滑入放大效果 */
.memory-content img:hover {
  transform: scale(1.1); /* 滑入时放大 1.1 倍 */
}

/* 記事標題樣式 */
.memory-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

/* 記事描述樣式 */
.memory-description {
  font-size: 14px;
  color: #666;
  margin: 5px 0 0;
  width: 100%;
}

.middle {
  display: flex;
  align-items: center; /* 垂直置中 */
  justify-content: space-between; /* 水平分佈兩側 */
  gap: 10px; /* 增加子元素之間的間距 */
  width: 100%;
}

.middle > h3 {
  flex: 1; /* 讓標題填滿剩餘空間 */
  text-align: left; /* 向左對齊 */
}

.middle > span {
  flex-shrink: 0; /* 防止日期被壓縮 */
  text-align: right; /* 向右對齊 */
}

/* 記事日期樣式 */
.memory-date {
  font-size: 14px;
  color: #999;
  margin-left: 10px;
}
</style>
