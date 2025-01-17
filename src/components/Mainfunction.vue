<template>
  <div class="main-function">
    <div
      class="feature"
      v-for="feature in features"
      :key="feature.id"
      @click="navigateTo(feature.path)"
    >
      <div class="feature-card">
        <img class="icon" :src="feature.img" :alt="feature.label" />
        <div class="label">{{ feature.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // 引入 useRouter
import countd from "@/assets/countd.png";
import calenderi from "@/assets/calenderi.png";
import island from "@/assets/island.png";

// 功能項目資料
const features = ref([
  { id: 1, label: "倒數日", img: countd, path: "/countdown" },
  { id: 2, label: "記憶島", img: island, path: "/memory" },
  { id: 3, label: "行事曆", img: calenderi, path: "/calendar" },
]);
const router = useRouter(); // 使用 Vue Router
// 導航函式
const navigateTo = (path) => {
  router.push(path);
};
</script>

<style scoped>
/* 📌 整體樣式 */
.main-function {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: #ffffff;
  gap: 10px; /* 卡片間距 */
}

/* 📌 功能卡片 */
.feature {
  flex: 1;
  display: flex;
  justify-content: center;
}

.feature-card {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  background-color: #f9fafc;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100px; /* 卡片寬度 */
  height: 40px; /* 卡片高度 */
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.feature-card:hover {
  transform: scale(1.05);
}

/* 📌 圖標樣式 */
.icon {
  width: 28px; /* 圖片寬度 */
  height: 28px; /* 圖片高度 */
  object-fit: contain; /* 確保圖片適應容器 */
  margin-bottom: 10px;
}

/* 📌 標籤 */
.label {
  font-size: 14px; /* 調整文字大小 */
  font-weight: 500;
  color: #333;
  margin-left: 10px;
}
</style>
