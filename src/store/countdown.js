import { defineStore } from "pinia";

export const useCountdownStore = defineStore("countdown", {
  state: () => ({
    events: [
      {
        id: 1,
        title: "生日倒數",
        targetDate: "2025-12-25",
        daysRemaining: 345,
      },
      {
        id: 2,
        title: "考試倒數",
        targetDate: "2025-06-10",
        daysRemaining: 150,
      },
      {
        id: 3,
        title: "考試倒數",
        targetDate: "2025-06-10",
        daysRemaining: 150,
      },
      {
        id: 4,
        title: "考試倒數",
        targetDate: "2025-06-10",
        daysRemaining: 150,
      },
    ],
    selectedEvent: {
      id: 1,
      title: "生日倒數",
      targetDate: "2025-12-25",
      daysRemaining: 345,
    }, // 初始化為第一個事件
  }),
  actions: {
    selectEvent(id) {
      this.selectedEvent = this.events.find((event) => event.id === id);
    },
  },
});
