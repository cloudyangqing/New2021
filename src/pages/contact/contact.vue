<template>
	<div class="contactUs">
		<div class="lian_header">
			<div class="lian_header_info">				
				<div class="lian_info">
					<h3>{{$t('contactUs.title')}}</h3>
				    <p v-html="$t('contactUs.subtitle')" ></p>
				</div>
			</div>
		</div>
		
		<div class="lian_wrap">
			<div class="lian_wrapl">
				<h3>{{$t('contactUs.content1')}}</h3>
				<form id="formMsg">
					<div class="namebox">
						<div class="inputbox">
							<div class="nameword">{{$t('contactUs.content2')}}<i>*</i></div>
							<input :class="{borderColorRed:firstNameBl}" type="text" class="input_word" v-on:focus="checkInput()" v-model="firstName" />
							<p v-if="firstNameBl" class="input-tip">{{$t('contactUs.content3')}}</p>
						</div>
						<div class="inputbox inputmargin">
							<div class="nameword">{{$t('contactUs.content4')}}<i>*</i></div>
							<input :class="{borderColorRed: lastNameBl}"  type="text" class="input_word" v-on:focus="checkInput2()" v-model="lastName" />
							<p v-if="lastNameBl" class="input-tip">{{$t('contactUs.content5')}}</p>
						</div>
					</div>
					
					<div class="inputs">
						<div class="nameword">{{$t('contactUs.content6')}}<i>*</i></div>
						<input :class="{borderColorRed: emailBl || emailBlTwo}" v-on:focus="checkInput3()" v-model="email" type="text" class="input_word" />
						<p v-if="emailBl" class="input-tip">{{$t('contactUs.content7')}}</p>
                        <p v-if="emailBlTwo" class="input-tip">{{$t('contactUs.content8')}}</p>
					</div>
					
					<div class="inputs">
						<div class="nameword">{{$t('contactUs.content11')}}<i>*</i></div>
						<input v-model="title" type="text" class="input_word" />
					</div>
					
					<div class="inputs">
						<div class="nameword">{{$t('contactUs.content12')}}<i>*</i></div>
						<textarea v-model="content" type="text" class="input_text" cols="40" rows="10" > </textarea>
					</div>
					
					<button type="button" class="tijiao_btn" @click="sendMsg()" >{{$t('contactUs.content13')}}</button>
					<p class="tishi_word">{{$t('contactUs.content14')}}</p>
					
					
				</form>
			</div>
			<div class="lian_wrapr">
				<div class="lian_wrapr_word" v-for="item in $t('contactUs.listData')" >					
					<h3>{{item.title}}</h3>
                    <p>{{item.contentP}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      title: '',
      content: '',
      firstNameBl: false,
      lastNameBl: false,
      emailBl: false,
      //  邮箱验证
      emailBlTwo: false
    }
  },
  methods: {
    checkInput () {
      this.firstNameBl = false
    },
    checkInput2 () {
      this.lastNameBl = false
    },
    checkInput3 () {
      this.emailBl = false
      this.emailBlTwo = false
    },
    checkInput4 () {
      this.addressBl = false
    },
    sendMsg () {
      let reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
      if (!this.firstName || this.firstName === ' ') {
        this.firstNameBl = true
      }
      if (!this.lastName || this.lastName === ' ') {
        this.lastNameBl = true
      }
      if (!this.email || this.email === ' ') {
        this.emailBl = true
      } else if (!reg.test(this.email)) {
        this.emailBl = false
        this.emailBlTwo = true
      }
      if ((this.firstName && this.firstName !== ' ') && (this.lastName && this.lastName !== ' ') && ((this.email && this.email !== ' ') && reg.test(this.email))) {
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.title = ''
        this.content = ''
        alert(this.$t('contactUs.alertText'))
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped >
 @import "../../assets/css/common/animation.css";
   .contactUs
     width:100%
     height:auto
     animation:fadeInUp 1s both
     input,textarea
      padding-left:5px;
      background-color: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
      box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
      -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
      -webkit-transition: all border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s ease-out;
      -o-transition: all border-color ease-in-out .15s,box-shadow ease-in-out .15s ease-out;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      -webkit-transition: all border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s ease-out;
      -o-transition: all border-color ease-in-out .15s,box-shadow ease-in-out .15s ease-out;
      transition: all border-color ease-in-out .15s,box-shadow ease-in-out .15s ease-out;
      &:focus
       border-color: #888888;
       outline: 0;
       -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(136,136,136,0.6);
       box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(136,136,136,0.6);
     .lian_header
       width:100%
       height:500px
       background:url('../../assets/images/lin-img/bg_4.jpg')
       background-position:center
       background-repeat:no-repeat
       background-size:cover       
       .lian_header_info
        max-width:1200px
        height:100%
        margin:auto
        display:box
        box-align:center
        box-items:center
        display:-webkit-box
        -webkit-box-align:center
        -webkit-box-items:center
        box-pack:center
        .lian_info
         width:100%
         height:auto
         h3
          width:100%
          font-size:54px
          font-weight:normal
          color:#fff
          margin-top:30px
          animation:fadeInUp 1.5s both
         p
          width:100%
          font-size:20px
          line-height:35px
          color:#fff
          margin-top:20px
          animation:fadeInUp 2s both
     .lian_wrap
      width:1200px
      margin:0 auto
      height:auto
      box-sizing:border-box
      overflow:hidden
      .lian_wrapl
       width:560px
       margin-top:100px
       margin-right:80px
       padding-bottom:100px
       height:auto
       float:left
       box-sizing:border-box
       h3
        width:100%
        font-size:36px
        color:#066b98
        font-weight:normal        
	  #formMsg
	    width:100%
	    height:auto
	    .namebox
	     width:100%
	     height:auto
	     padding-top:10px
	     padding-bottom:10px
	     display:flex
	     .inputmargin
	      margin-left:40px
	     .inputbox
	      width:50%
	      height:auto	     	    	     
	      input
           display:block
           width:100%
           height:30px
           padding-top:5px
           padding-bottom:5px
           &.borderColorRed
            border-color #d86761
	      .nameword
	       font-size:14px
	       line-height:40px
	       color:#999
	       i
	        line-height:40px
	        color:#d86761
	      .input-tip
	        width:100%
	        line-height:30px
	        font-size:12px
	        color:#d86761
	    .inputs
	      width:100%
	      height:auto
	      padding-top:10px
	      padding-bottom:10px
	      input
	       display:block
	       width:100%
	       height:30px
	       padding-top:5px
	       padding-bottom:5px
	       &.borderColorRed
            border-color #d86761
	      .nameword
	       font-size:14px
	       line-height:40px
	       color:#999
	       i
	        line-height:40px
	        color:#d86761
	     .input-tip
	       width:100%
	       line-height:30px
	       font-size:12px
	       color:#d86761
	     .input_text
	      width:100%
	      min-height:150px
	      padding-left:5px
	      padding-top:10px
	      padding-bottom:10px
	   .tijiao_btn
	     width:150px
	     height:40px
	     text-align:center
	     line-height:40px
	     color:#fff
	     font-size:14px
	     background-color:#27a2db
	     border-radius:4px 
	     cursor:pointer
	     border:0px
	     margin-top:50px
	     margin-bottom:20px
	     outline:none
	     transition:all 0.3s
	     &:hover
	      background-color:#999
	      transition:all 0.3s
	      color:#fff
	   .tishi_word
	     font-size:14px
	     color:#999
	     line-height:45px
	 .lian_wrapr
	  width:auto
	  float:right 
	  padding-top:100px
	  padding-right:100px     
	  .lian_wrapr_word
	   font-size:14px
	   line-height:40px    
	   h3
	    font-size:20px
	    line-height:40px
	    color:#066b98	
	    margin-top:28px    
	   p
	    font-size:14px
	    color:#999
	    line-height:35px   
</style>