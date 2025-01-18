<script setup lang='ts'>
interface Props {
  name: string
}
defineProps<Props>()
</script>

<template>
  <view center>
    {{ name }}
  </view>
</template>

<style></style>
