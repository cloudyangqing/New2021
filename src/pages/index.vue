<template>
	<div class="main_warpper" style="animation: fadeInUp 1s both">
		<div class="warpper_one">
			<div class="warrper_one_main">
				<div class="warrper_one_info">
					<h1>{{$t('index.text1')}}</h1>
					<p>{{$t('index.text2')}}</p>
					<a href="/downLoad" target="_blank" >{{$t('index.text3')}}</a>
				</div>
			</div>
		</div>
		
		<div class="warrper_two">
			<div class="warrper_two_main">
				<div class="warrper_two_info">
					<div class="two_info_left">
						<h1>{{$t('index.text4')}}</h1>
						<p v-html="$t('index.text5')" ></p>
					</div>
					<div class="two_info_right">
						<img src="../assets/images/1/index/1.svg" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>   
@import "../assets/css/common/animation.css";
    .main_warpper
      width:auto
      height:auto
      max-width:1920px
      margin:auto
      .warpper_one
       width:100%
       height:500px
       padding-left:15px
       padding-right:15px
       box-sizing:border-box
       background:url('../assets/images/1/index/banner.png')
       background-position:center
       background-size:cover
       background-repeat:no-repeat
       animation:fadeInUp 1s both
       -webkit-animation:fadeInUp 1s both
       .warrper_one_main
        width:100%
        height:100%              
        max-width:1200px
        margin:auto
        display:flex
        display:box
        box-align:center
        box-items:center
        display:-webkit-box
        -webkit-box-align:center
        -webkit-box-items:center 
        .warrper_one_info
         width:100%
         height:auto         
         h1
          animation:fadeInUp 1s both
          -webkit-animation:fadeInUp 1s both
          width:100%
          display:block
          font-size:64px
          font-weight:normal
          color:#fff
         p
          font-size:20px
          color:#fff
          margin-top:40px
          width:100%
          display:block
          animation:fadeInUp 1.5s both
        a
         display:block
         width:160px
         height:50px
         border-radius:4px
         line-height:50px
         align-items:center
         cursor:pointer
         display:box
         box-pack:center
         box-align:center
         display:-webkit-box
         -webkit-box-pack:center
         -webkit-box-pack:center         
         font-size:14px
         animation:fadeInUp 2s both
         color:#fff
         margin-top:40px
         background-color:#27a2db
         &:hover
          background-color:#43bded
          color:#fafafa
      .warrper_two
        width:100%
        height:540px
        background-color:#fff  
        .warrper_two_main
         width:100%
         height:100%              
         max-width:1200px
         margin:auto
         display:flex
         display:box
         box-align:center
         box-items:center
         display:-webkit-box
         -webkit-box-align:center
         -webkit-box-items:center 
         .warrper_two_info
          width:100%
          height:auto
          display:flex
          .two_info_left
           height:auto
           h1
            animation:fadeInUp 1s both
            -webkit-animation:fadeInUp 1s both
            width:100%
            display:block
            font-size:30px
            font-weight:normal
            color:#27a2db
           p
            font-size:16px
            color:#666
            margin-top:40px
            line-height:35px
            width:100%
            display:block
            animation:fadeInUp 1.5s both
            
            
           
       
       
       
      
</style>