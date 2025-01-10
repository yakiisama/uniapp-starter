<script>
export default {
  name: 'ActivityCard',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <view>
    <view flex gap-1>
      <image h-60rpx w-60rpx rounded-full :src="item.owner" />
      <view flex flex-col gap-1>
        <view>
          <view text-lg text-black>
            {{ item.ownerName }}
          </view>
          <image h-30rpx w-30rpx rounded-full alt="sex" :src="item.owner" />
          <image h-30rpx w-60rpx rounded-full alt="vip" :src="item.owner" />
        </view>
        <view>
          <view>
            <text v-for="(tag, idx) in item.tags" :key="idx" text-sm>
              {{
                tag
              }}
            </text>
            <view class="pay">
              线上支付
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped></style>
