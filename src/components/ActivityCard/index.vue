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
  <view p-5 text-base>
    <!-- 创建人 -->
    <view flex gap-1>
      <image h-100rpx w-100rpx rounded-full :src="item.owner" />
      <view flex flex-col gap-1>
        <view flex items-center gap-2>
          <view text-lg text-black>
            {{ item.ownerName }}
          </view>
          <image h-40rpx w-40rpx rounded-full alt="性别" :src="item.owner" />
          <image h-40rpx w-60rpx rounded-full alt="会员" :src="item.owner" />
        </view>
        <view>
          <view flex gap-1>
            <text v-for="(tag, idx) in item.tags" :key="idx" text-sm text-black:65>
              {{
                tag
              }}
            </text>
            <view center rounded-lg px-3 py-4rpx text-sm color-cyan class="bg-[#253942]">
              线上支付
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 活动详情 -->
    <view mt-4 flex gap-3>
      <image h-240rpx w-300rpx rounded-lg :src="item.owner" alt="活动信息" />
      <view flex flex-col gap-1>
        <view text-lg>
          {{ item.title }}
        </view>
        <view y-center gap-3>
          <view y-center gap-1>
            <i class="i-lucide:users"></i>
            <text>{{ item.memberCount }}人</text>
          </view>
          <view y-center gap-1 color-blue>
            <i class="i-mdi:face-man"></i>2
          </view>
          <view y-center gap-1 color-pink>
            <i class="i-mdi:face-woman-outline"></i>4
          </view>
        </view>
        <view y-center gap-1 text-black:65>
          <i class="i-lucide:clock-3"></i>{{ item.date }}
        </view>
        <view y-center gap-1 text-black:65>
          <i class="i-lucide:map-pin"></i>{{ item.location }}
        </view>
      </view>
    </view>
    <van-divider />
    <!-- 报名信息 -->
    <view flex items-center justify-between>
      <view flex gap-1>
        <view flex>
          <image v-for="(avatar, i) in item.members" :key="i" :src="avatar" class="avatar-item" />
        </view>
        <text text-black:75>
          报名中5/10
        </text>
      </view>
      <view rounded-2xl bg-amber px-3 py-2 text-center text-white>
        立即报名
      </view>
    </view>
  </view>
</template>

<style scoped>
.avatar-item {
  height: 50rpx;
  width: 50rpx;
  border-radius: 100%;
  border: 2rpx solid #efefef;
  box-shadow: 0 0 2rpx 2rpx rgba(0, 0, 0, 0.1);
}

.avatar-item:not(:first-child) {
  margin-left: -24rpx;
}
</style>
