<script setup lang="ts">
import { request } from '@/api/request'

const personList = ref<any[]>([])
request.get('/api/person/list').then((res) => {
  console.log(res)
  personList.value = res.data
})
</script>

<template>
  <view>
    <view v-for="person in personList" :key="person.id" flex flex-col items-center gap-1>
      <image :src="person.avatar" rounded-lg></image>
      <view flex items-center justify-end gap-1>
        <text>{{ person.name }}</text>
        <text>{{ person.age }}</text>
        <text>{{ person.sex ? '男' : '女' }}</text>
      </view>
    </view>
  </view>
</template>

<style scoped></style>
