<template>
	<div>
		<div class="Report_cover"></div>
		<div class="editPicture">
			<!--编辑标题-->
			<div class="poupTitle">
				<button @click="submit($event)">上传</button>
				<span class="text">编辑图片</span>
				<div class="closeBtn"><i class="el-icon-close"></i></div>
			</div>
			<!--编辑内容-->
			<div class="poupContent">
				<div class="infoBox scrollBox">
					<!--上传图片-->
					<div class="uploadLine"  v-for="(item,index) in imagesList">
						<div class="title">{{item.title}}：</div>
						<div class="imgBox">
						<!--下边这两句代码也要，不是被注释掉了，第一次写博客，不知道这个怎么回事，把img标签的右尖括号补上以后这句代码就没了，你们凑活看吧-->
						  <img v-if="item.newSrc!=''" :src="item.newSrc"/>
					      <img v-else  :src="item.defaultSrc"/>
				  	    </div>
						<div class="btnBox">
							<div class="uploadBtn">
								<input id="file" @change="uploading(index,$event)" type="file" accept="image/*">
								<i class="el-icon-plus"></i>上传替换
							</div>
						</div>
						<div class="btnBox">
							<button class="returnBtn" @click="returnImg(index,$event)" v-show="item.newSrc!=''">恢复默认</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
            return {
                //展示图片路径
                imagesList:[ {
                    title:'四等奖',
                    newSrc: '',
                    defaultSrc:require('../img/21091016-1.jpg'),
                },{
                    title:'五等奖',
                    newSrc: '',
                    defaultSrc:require('../img/21091016-2.jpg'),
                }],
                imgList: [],
                imgData: {
                    accept: 'image/gif, image/jpeg, image/png, image/jpg',
                },
			}
        },
        methods: {
            //多张上传
            uploading(fileIndex,e) {
                let windowURL = window.URL || window.webkitURL;
                let elem = e.target; //选中的目标文件
                if (!elem.files || elem.files.length == 0) return;
                let files = elem.files;
                //创建图片文件的url
                this.imagesList[fileIndex].newSrc = windowURL.createObjectURL(elem.files[0]);//获取图片展示路径
                console.log(files)
                for (let i = 0; i < files.length; i++) {
                    let file = files[i];  
                    this.fileAdd(fileIndex+1,file);
                    //打印一下查看传给后台的数据
                    console.log(this.imgList)
                }
            },

            // 单张上传
            fileAdd (fileIndex,file) {
                // console.log(file);
                let type=file.type;//文件的类型，判断是否是图片
                let size=file.size;//文件的大小，判断图片的大小
                if(this.imgData.accept.indexOf(type) === -1){
                    alert('请选择我们支持的图片格式！');
                    return false;
                }
                if(size > 3145728){
                    alert('请选择3M以内的图片！');
                    return false;
                }
                let that = this;
                //将每个图片的file和对应图片的下标push到定义好的数组中
				that.imgList.push({fileIndex,file});

            },
            //恢复默认图片
  			 returnImg(fileIndex,e){
                this.imagesList[fileIndex].newSrc='';
             },
            submit() {
                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',  //之前说的以表单传数据的格式来传递fromdata
                        "Access-Control-Allow-Origin": "*"
                    }
                };
                const instance = axios.create({
                    withCredentials:true,
                    crossDomain: true,
                });
                instance.post('http://10.0.162.108:8080/gconline/FileUploadAction!upload.action',data).then((res) => {
                    //做处理
                }).catch((error) => {

               })
            },
        }
    }

</script>
<style>
	/*遮罩层*/
	.Report_cover{width:100%;height:100%;position: fixed;bottom: 0;text-align: center;z-index: 998;background-color: rgba(0, 0, 0, 0.54);}
	/*编辑图片*/
	.editPicture{position: fixed;border-radius: 4px;overflow: hidden;font-size: 14px;top: 10px;width:435px;z-index:999;background: #fff;height:400px;min-height:400px;margin: auto;left: 0;right: 0;}
	.poupTitle{height: 50px;line-height: 50px;background-color: #f8f8f8;font-size: 12px;color: #000;padding-left: 20px;border-bottom: 1px solid #dadada;box-sizing: border-box;font-weight: 4}
	.closeBtn{position: absolute;right: 20px;top:0;width: 26px;height: 24px;font-size: 16px;}
	.closeBtn:hover{color: #409EFF}
	.poupContent{height: 350px;min-height: 350px;overflow: auto;padding: 20px}
	.infoBox{min-height:350px}
	.infoBox>p>img{width: 50px;height: 50px;}
	.uploadLine{height: 100px;padding: 10px 20px;position: relative;}
	.title{display: inline-block;line-height:72px; width: 100px;text-align: right;vertical-align: middle;height: 100%;font-size: 12px;}
	.imgBox{width: 70px;height: 70px;border: 1px dashed #d7d7d7;margin-right: 20px;overflow: hidden;text-align: center;background: #e8e8e8;position: absolute;display: inline-block;}
	.imgBox>img{margin: auto;display: block;position: absolute;top: 0;left: 0;bottom: 0;right: 0;}
	.btnBox{height: 100%;vertical-align: middle;display: inline-block;position: relative;left: 100px;}
	.uploadBtn{display: inline-block;border: 1px solid;position: relative;top:40%;border-radius: 4px;padding: 2px 5px;background-color: #26a2ff;color: #f5f7fa;}
	.uploadBtn>input{position: absolute; top: 0; left: 0; opacity: 0; cursor: pointer; height: 40px; width: 88px;}
	.returnBtn{margin-top: 33px;background-color: white;border: 1px solid #26a2ff;border-radius: 4px;padding: 2px 5px;color: #26a2ff;}
</style>