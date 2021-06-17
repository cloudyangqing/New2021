<template>
  <div id="app">
    <LuckDraw
      v-model="currIndex"
      :awards="awards"
      @start="handleStart"
      @end="handleEnd"
    />
    
     <LuckyWheel
      style="width: 200px; height: 200px"
      v-model="currIndex"
      :awards="awards"
      :rate="rate"
      :radius="radius"
      :textFontSize="textFontSize"
      :lineHeight="lineHeight"
      :textColor="textColor"
      :textMargin="textMargin"
      :textPadding="textPadding"
      :btnFontSize="btnFontSize"
      :btnColor="btnColor"
      :btnBorderColor1="btnBorderColor1"
      :btnBorderColor2="btnBorderColor2"
      :btnBorderColor3="btnBorderColor3"
      :btnBgColor="btnBgColor"
      :btnText="btnText"
      :btnRadius="btnRadius"
      :borderColor="borderColor"
      @start="handleStart"
      @end="handleEnd"
    />
    <LuckyGrid  
    	v-model="currIndex"
      :awards="awards"
      :rate="rate"
      :radius="radius"
      :textFontSize="textFontSize"
      :lineHeight="lineHeight"
      :textColor="textColor"
      :textMargin="textMargin"
      :textPadding="textPadding"
      :btnFontSize="btnFontSize"
      :btnColor="btnColor"
      :btnBorderColor1="btnBorderColor1"
      :btnBorderColor2="btnBorderColor2"
      :btnBorderColor3="btnBorderColor3"
      :btnBgColor="btnBgColor"
      :btnText="btnText"
      :btnRadius="btnRadius"
      :borderColor="borderColor"
      @start="handleStart"
      @end="handleEnd" style="width: 200px; height: 200px"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currIndex: 0,               // 奖品的索引
      rate: 80,                   // 转盘速率
      radius: 180,                // 转盘半径
      textFontSize: '13px',       // 文字大小
      lineHeight: 20,             // 文字行高
      textColor: '#d64737',       // 文字颜色
      textMargin: 30,             // 文字距离边框距离
      textPadding: 0,             // 文字补偿宽度
      btnFontSize: '26px',        // 按钮文字大小
      btnColor: '#d64737',        // 按钮文件颜色
      btnBorderColor1: '#d64737', // 按钮外边框颜色
      btnBorderColor2: '#ffffff', // 按钮内边框颜色
      btnBorderColor3: '#f6c66f', // 按钮指针颜色
      btnBgColor: '#ffdea0',      // 按钮背景颜色
      btnText: '抽奖',            // 按钮内容
      btnRadius: 60,              // 按钮半径
      borderColor: '#d64737',     // 边框颜色
      awards: [                   // 奖品
        { name: '价值5988元华为 P30pro', color: '#f9e3bb' },
        { name: '价值398元车载空气净化器', color: '#f8d384' },
        { name: '价值25元百叶帘遮阳挡', color: '#f9e3bb' },
        { name: '16元油卡套餐红包', color: '#f8d384' },
        { name: '5元油卡直冲红包', color: '#f9e3bb' },
        { name: '3元话费直冲红包', color: '#f8d384' },
        { name: '价值32元重力感应手机支架', color: '#f9e3bb' },
        { name: '价值198元手提迷你车在保温冷藏箱', color: '#f8d384' },
      ],
    }
  },
  methods: {
    handleStart () {
      console.log('开始抽奖')
    },
    handleEnd (index) {
      alert('恭喜您抽到大奖, 奖品为' + this.awards[this.currIndex].name)
    }
  }
}
</script>

<style>
</style>