<template>
  <div class="important-memo">
    <h3 class="title">今天下午該要取買煮火鍋的料理</h3>

    <div class="footer">
      <p class="description">記事</p>
      <img src="@/assets/read.png" alt="閱讀更多" class="read-more-icon" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("今天下午該要取買煮火鍋的料理");
const description = ref("準備食材，享受美好的一餐！記得檢查所有材料是否齊全。");
</script>

<style scoped>
.important-memo {
  background: #88bccb;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin: 20px 0; /* 上下間距 */
  min-height: 160px; /* 設置最小高度，防止壓縮 */
  display: flex; /* 確保內容不會重疊 */
  flex-direction: column; /* 子元素垂直排列 */
  justify-content: space-between; /* 子元素均勻分佈，避免擁擠 */
}

.title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 0; /* 移除所有的外邊距 */
  padding: 0; /* 移除所有的內邊距 */
  text-align: left; /* 確保文字靠左對齊 */
  color: white;
}

.description {
  font-size: 0.9em;
  color: #ffffff;
  margin-bottom: 10px;
  text-decoration: none; /* 確保文字沒有底線 */
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.read-more {
  display: inline-block;
}

.read-more-icon {
  width: 50px; /* 調整圖片寬度 */
  height: 50px; /* 調整圖片高度 */
  object-fit: contain; /* 確保圖片比例不變 */
  cursor: pointer; /* 添加手型鼠標指標效果 */
}

.read-more-icon:hover {
  transform: scale(1.1); /* 鼠標懸停時微小放大效果 */
  transition: transform 0.2s ease-in-out;
}
</style>
