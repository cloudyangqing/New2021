<template>
	<div v-if="isTure" class="footer_box">
		<div class="footer_bg">
			<ul>
				<li class="li_one">{{$t('footer.text1')}}</li>
				<li class="li_two"><router-link to="/socailWalletTwo" >{{$t('footer.text2')}}</router-link></li>
				<li class="li_two"><router-link to="/rrayRobotTwo" >{{$t('footer.text3')}}</router-link></li>
				<li class="li_two"><router-link to="/intelligentTrainerTwo" >{{$t('footer.text4')}}</router-link></li>
			</ul>
			<ul>
				<li class="li_one">{{$t('footer.text5')}}</li>
				<li class="li_two"><router-link to="/blockChain" >{{$t('footer.text6')}}</router-link></li>
				<li class="li_two"><router-link to="/artificialIntelligence" >{{$t('footer.text7')}}</router-link></li>
				
			</ul>
			<ul>
				<li class="li_one">{{$t('footer.text8')}}</li>
				<li class="li_two"><router-link to="/helpCenter" >{{$t('footer.text9')}}</router-link></li>
				<li class="li_two"><router-link to="/radar" >{{$t('footer.text10')}}</router-link></li>	
				<!--<li class="li_two">{{$t('footer.text11')}}</li>-->
			</ul>
			<ul>
				<li class="li_one">{{$t('footer.text12')}}</li>
				<li class="li_two"><router-link to="/about" >{{$t('footer.text13')}}</router-link></li>
				<li class="li_two"><router-link to="/contact" >{{$t('footer.text14')}}</router-link></li>				
			</ul>
		</div>
		
		<div class="footer_time">
			<p>© 2013-2018 Rraystudio All Rights Reserved.</p>
			<p>Rraystudio Tech Ltd.</p>
			<div class="language">
				<span @click="chooseLan('EN')">English</span>
                <span @click="chooseLan('CN')">中文</span>
			</div>
		</div>
		
		
	</div>
</template>


<style lang="stylus" rel="stylesheet/stylus" scoped >
$a = #000
 .footer_box
   width:100%
   min-height:355px
   background-color:$a
   color:#fff
   background:url("../assets/images/foot_bg.png")
   background-size:cover
   background-repeat: no-repeat
   background-position:center
   margin:0 auto 
   padding-left:25px
   padding-right:25px
   box-sizing:border-box 
   font-size:14px    
   .footer_bg    
    display:-webkit-box
    display: flex
    max-width:1200px
    height:auto
    margin:0 auto
    justify-content: space-between
    ul
     width:400px
     height:auto
     display:block
	  li
	    width:100%
	    height:auto
	    color:#fff
	  li.li_one
	   width:90%
	   border-bottom:1px solid #999
	   height:70px
	   line-height:90px
	   font-size:16px
	  li.li_two
	   width:90%
	   height:30px
	   line-height:30px
	   color:#999
	   a
	    color:#999
   .footer_time
      width:100%
      height:auto
      color:#999
      max-width:1200px
      margin:20px auto
      p
       line-height:35px
      .language
       width:100%
       height:auto
       span
        font-size:14px
        color:#999
        line-height:32px
        display:inline-block
        margin-right:35px
        cursor:pointer
       span:hover
        color:#ccc
        transition:all 0.3s
 @media screen and (max-width:768px ) 
  .footer_box
   background:url("../assets/images/downbg@2x.png")
   background-repeat:no-repeat
   background-size:cover
   background-position:center
   min-height:755px
   .footer_bg     
     display:block
     ul
     width:100%    
</style>

<script type="text/ecmascript-6">
	import {i18n} from '../i18n/i18nconfig'
	
	export default {
		data () {
		    return {
		      isTure: true
		    }
		  },
		  mounted () {
		    this.$nextTick(() => {
		      if (localStorage.getItem('langu')) {
		        i18n.locale = localStorage.getItem('langu')
		      }
		    })
		  },
		  methods: {
		    chooseLan (lan) {
		      localStorage.setItem('langu', lan)
		      i18n.locale = lan
		      //      window.location.reload()
		      //    刷新页面
		      this.$router.go(0)
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