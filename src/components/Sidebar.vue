<template>
  <div class="sidebar" :class="{ 'is-visible': visible }">
    <div class="sidebar__content">
      <!-- 側邊欄內容 -->
      <div class="function-container">
        <div class="sidebar-personal">
          <div class="sidebar-photo">
            <img src="@/assets/mainphoto.png" alt="" class="mainphoto" />
          </div>
          <div class="sidebar-personal-content">
            <p>藍藍</p>
            <p class="status-text">狀態列</p>
          </div>
          <img src="@/assets/arrow.png" alt="" class="sidebararrow" />
        </div>
        <div class="sidebarfunction">
          <div class="mainfunction" @click="openModal">
            <img src="@/assets/icona.png" alt="" />我的種子
          </div>
          <div class="mainfunction" @click="openModal">
            <img src="@/assets/iconb.png" alt="" />記帳
            <span class="pay-tag">付費</span>
          </div>
          <div class="mainfunction" @click="openModal">
            <img src="@/assets/iconb.png" alt="" />旅遊地圖
            <span class="pay-tag">付費</span>
          </div>
        </div>
      </div>
      <div class="advertisement">
        <img src="@/assets/advertisement.png" alt="" class="ad" />
      </div>
      <!-- <button @click="closeSidebar" class="close-btn"></button> -->
    </div>
    <!-- 彈窗區域 -->
    <div class="modal-overlay" v-if="isModalVisible" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img src="@/assets/advertisementmain.png" alt="" class="adimg" />
        <p>功能開發中，盡請期待！</p>
        <button class="close-btn" @click="closeModal">確認</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

// 正確地定義 props
const props = defineProps({
  visible: Boolean, // 父組件傳遞的 visible
});

// 用於顯示/隱藏彈窗
const isModalVisible = ref(false);

// 打開彈窗
const openModal = () => {
  isModalVisible.value = true;
};

// 關閉彈窗
const closeModal = () => {
  isModalVisible.value = false;
};

const emit = defineEmits(["close"]); // 定義事件

const closeSidebar = () => {
  emit("close"); // 發送關閉事件
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: -300px; /* 初始狀態隱藏在螢幕外 */
  width: 300px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  transition: left 0.3s ease; /* 滑入動畫 */
  z-index: 1010; /* 在黑色遮罩上方 */
}

.ad {
  margin-top: 20px;
  height: 100px;
  width: 100%;
  overflow: visible;
}

.function-container {
  margin-top: 50px;
}

.mainphoto {
  width: 50px;
  height: 50px;
}

.sidebar.is-visible {
  left: 0; /* 顯示時滑入螢幕 */
}

.sidebar__content {
  display: flex; /* 使用 flex 布局 */
  flex-direction: column; /* 垂直排列內容 */
  height: 100%; /* 撐滿側邊欄高度 */
  justify-content: space-between; /* 確保內容和廣告在上下兩端 */
  padding: 20px; /* 保持內邊距 */
  box-sizing: border-box; /* 確保內邊距不影響高度 */
}
.advertisement {
  margin: 0; /* 去除上下左右間距 */
  padding: 0; /* 清除內部填充 */
  width: 100%; /* 撐滿側邊欄的寬度 */
  text-align: center; /* 使廣告內容居中 */
}

.ad {
  width: 100%; /* 確保廣告圖片寬度填滿 */
  height: auto; /* 按比例縮放高度 */
}

.sidebar-personal {
  display: flex;
  align-items: center;
}

.sidebar-personal-content {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  align-items: flex-start; /* 讓內容靠左對齊 */
  justify-content: center; /* 整體垂直居中 */
  gap: 2px; /* 更小的上下間距 */
  margin: 0; /* 清除外部多餘間距 */
  padding: 0; /* 清除內部多餘間距 */
  height: auto; /* 自適應內容高度 */
}

.sidebar-personal-content p {
  margin: 0; /* 清除上下默認間距 */
  padding: 0; /* 清除內部間距 */
  margin-left: 10px;
}

.status-text {
  color: gray; /* 設置文字顏色為灰色 */
  font-size: 14px; /* 可根據需要調整字體大小 */
}

.mainfunction {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: #f5f5f5;
  margin-top: 10px;
  gap: 10px;
  border-radius: 10px;
}

.pay-tag {
  margin-right: 10px;
  background-color: #cce5ff; /* 淺藍色背景 */
  color: #009fcd; /* 藍色文字 */
  font-size: 12px; /* 調整字體大小 */
  padding: 2px 8px; /* 添加內邊距 */
  border-radius: 12px; /* 圓角效果 */
  margin-left: auto; /* 讓標籤靠右對齊 */
  white-space: nowrap; /* 防止折行 */
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #009fcd;
  color: #ffffff;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 5px;
  height: 30px;
  width: 200px;
  margin-top: 30px;
}

.sidebararrow {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  margin-left: 120px;
}

/* 彈窗遮罩 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050; /* 高於側邊欄 */
}

/* 彈窗內容 */
.modal-content {
  display: flex; /* 使用 flex 布局 */
  flex-direction: column; /* 垂直排列內容 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  background-color: #ffffff; /* 白色背景 */
  width: 240px; /* 固定寬度 */
  height: 220px; /* 固定高度 */
  padding: 20px;
  border-radius: 8px; /* 圓角 */
  text-align: center; /* 文字居中 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 陰影效果 */
}

.adimg {
  width: 180px;
}
</style>
