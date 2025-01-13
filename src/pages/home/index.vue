<script setup lang="ts">
import ActivityCard from '@/components/ActivityCard/index.vue'

const activities = ref([
  {
    id: 1,
    owner: 'https://picsum.photos/80/80',
    ownerName: '张三',
    title: '周末篮球友谊赛',
    description: '周末一起来打球，交朋友',
    tags: ['交友'],
    status: '报名中',
    date: '1/20',
    location: '上海市-闵行区',
    image: 'https://picsum.photos/80/80',
    members: ['https://picsum.photos/20/20', 'https://picsum.photos/20/20', 'https://picsum.photos/20/20', 'https://picsum.photos/20/20', 'https://picsum.photos/20/20'],
    memberCount: 8,
  },
])
</script>

<template>
  <view>
    <!-- 活动列表 -->
    <scroll-view scroll-y class="activity-list">
      <view v-for="(item, index) in activities" :key="index" class="activity-card">
        <ActivityCard :item="item" />
      </view>
    </scroll-view>
  </view>
</template>

<style scoped></style>
