<template>
  <div id="app">
    <!-- 根据路由的 meta 信息来决定是否显示 TopBar -->
    <TopBar v-if="showTopBar" @toggleSidebar="toggleSidebar" />

    <!-- 黑色透明背景 -->
    <div class="overlay" v-show="isSidebarVisible" @click="closeSidebar"></div>

    <!-- 側邊欄 -->
    <Sidebar :visible="isSidebarVisible" @close="closeSidebar" />

    <!-- 路由视图 -->
    <router-view />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router"; // 引入 useRoute
import TopBar from "./components/TopBar.vue";
import Sidebar from "./components/Sidebar.vue";

const route = useRoute(); // 获取当前路由信息

// 基于路由的 meta 来决定是否显示 TopBar
const showTopBar = computed(() => route.meta.showTopbar);

const isSidebarVisible = ref(false);

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

const closeSidebar = () => {
  isSidebarVisible.value = false;
};
</script>

<style>
html,
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f0f8; /* 設置全局背景顏色 */
}

#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

/* 黑色透明遮罩 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
</style>
