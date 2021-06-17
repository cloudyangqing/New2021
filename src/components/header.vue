<template>
	<div v-if="isTure" class="header" :class="{'activeNavs': changeColor}">
		<div class="header_bg">
			<div class="header_left">
				<router-link to="/">
					<img src="../assets/images/logo2.svg" />
				</router-link>
			</div>
			<div class="header-right" >
				<ul :class="{'activeNav': barType === 0}">
					<li class="header_lione" @mouseover="displayLanguage1" @mouseout="nodisplayLanguage1">
						{{$t('header.text1')}}
						<span class="fa fa-caret-down spanIcon"></span>
						<dl :class="{'activeNav': displayState1}">
							<dt><router-link to="/socailWalletTwo" @click.native="barType = 1" > {{$t('header.text2')}} </router-link> </dt>
							<dt><router-link to="/rrayRobotTwo" @click.native="barType = 1" > {{$t('header.text3')}} </router-link> </dt>
							<dt><router-link to="/intelligentTrainerTwo" @click.native="barType = 1" > {{$t('header.text4')}} </router-link> </dt>							
						</dl>
					</li>
					<li @mouseover="displayLanguage2" @mouseout="nodisplayLanguage2">
						{{$t('header.text5')}} 
						<span class="fa fa-caret-down spanIcon"></span>
						<dl :class="{'activeNav': displayState2}">
							<dt><router-link to="/blockChain" @click.native="barType = 1" >{{$t('header.text6')}}</router-link></dt>
							<dt><router-link to="/artificialIntelligence" @click.native="barType = 1" >{{$t('header.text7')}}</router-link></dt>
						</dl>
					</li>
					<li><router-link to="/radar" @click.native="barType = 1" >{{$t('header.text8')}}</router-link></li>
					<li><router-link to="/about" @click.native="barType = 1" >{{$t('header.text9')}}</router-link></li>
					<li><router-link to="/helpCenter" @click.native="barType = 1" >{{$t('header.text11')}}</router-link></li>
					<li><router-link to="/photo" @click.native="barType = 1" >{{$t('header.text13')}}</router-link></li>
					<li class="contact"><router-link to="/contact" @click.native="barType = 1" >{{$t('header.text12')}}</router-link></li>
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import $ from 'jquery'
	export default {
	  data () {
	    return {
	      barType: 1,
	      displayState1: false,
	      displayState2: false,
	      scroll: '',
	      changeColor: false,
	      isTure: true
	    }
	  },
	  methods: {
	    emargeBar () {
	      if (this.barType === 1) {
	        this.barType = 0
	      } else {
	        this.barType = 1
	      }
	    },
	    displayLanguage1 () {
	      this.displayState1 = true
	    },
	    nodisplayLanguage1 () {
	      this.displayState1 = false
	    },
	    displayLanguage2 () {
	      this.displayState2 = true
	    },
	    nodisplayLanguage2 () {
	      this.displayState2 = false
	    },
	    menu () {
	      this.scroll = $(window).scrollTop()
	    }
	  },
	  mounted () {
	    window.addEventListener('scroll', this.menu)
	  },
	  watch: {
	    scroll (val) {
	      if (val === 0) {
	        // console.log('我爬到顶了')
	        this.changeColor = false
	      } else {
	        // console.log('我走了')
	        this.changeColor = true
	      }
	    }
	  },
	  created () {
	    if (location.hash === '#/downLoad') {
	      this.isTure = false
	    } else {
	      this.isTure = true
	    }
	  }
	}
	
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
 .header
  width:100%
  height:66px
  border-bottom:1px solid #999
  position:relative
  z-index:2
  .activeNavs
   transition: cubic-bezier(0.125, 0.75, 0.415, 1) all 0.5s 0s
   background-color: #ffffff
   color: #666
   border-bottom: 1px solid #27a2db
  .header_bg
   width:100%
   max-width:1200px
   margin:auto
   background-color:#fff 
   height:66px
   display:box
   box-align:center
   box-pack:center 
   .header_left
    width:300px
    height:66px
    float:left
    display:flex
    display:-webkit-box
    -webkit-box-align:center
    align-items:center
    -webkit-box-pack:center   
    a img
     width:300px
     height:44px
     display:block    
   .header-right
     width:auto
     float:right
     height:100%
     ul
      width:auto
      height:100%
      display:flex
      li
       width:auto
       height:100%
       display:box
       box-align:center
       box-items:center
       box-pack:center
       display:-webkit-box
       -webkit-box-align:center
       -webkit-box-pack:center
       margin-left:30px
       margin-right:30px
       cursor:pointer
       font-size:16px
       color:#666
       position:relative
       transition:all 0.3s
       a
        color:#666 
        transition:all 0.3s
       a:hover
        color:#27A2DB  
        transition:all 0.3s        
      li:hover
        color:#27A2DB
        transition:all 0.3s
        span
         color:#27A2DB
         transition:all 0.3s
       .spanIcon
        display:inline-block
        color:#999
       dl
        width:auto
        height:auto
        padding:20px
        padding-top:5px
        background-color:rgba(255,255,255,0.8)
        position:absolute
        top:66px
        left:-20px
        min-width:130px
        display:none
       .activeNav
        display:block
        dt
         font-size:16px
         line-height:40px
         color:#666
         a
          color:#666
          transition:all 0.3s
         a:hover
          color:#27A2DB
          transition:all 0.3s
       li.contact
         height:32px
         padding-left:20px
         padding-right:20px
         background-color:#27A2DB
         border-radius:4px
         margin-top:18px
         a
          color:#fff
       li.contact:hover
         a
          color:yellow
</style>
