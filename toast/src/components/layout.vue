<template>
  <div class="wrap">
    <el-row style="height: 100%">
      <el-col :span="24" style="height: 100%">
        <div class="video">
          <video src="https://yuanmedia.vestainvestment.cn/loginVideoBgc.mp4" autoplay="autoplay" preload="auto" loop="loop" controlslist="nodownload"></video>
        </div>
      </el-col>
    </el-row>
    <el-row class="top">
      <el-col :span="24" style="text-align: center">
        <div class="top_font">欢 迎 您 回 来</div>
        <div class="top_font">请先登录源媒体账号，以便您能够无障碍使用我们的平台服务</div>
      </el-col>
      <el-col :span="16" class="top_box">

      </el-col>
    </el-row>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap{
    width:100%;
    height: 100%;
    position: relative;
  }
  .video{
    width:100%;
    height: 100%;
  }
  .video video{
    width:100%;
    height: 100%;
    object-fit:fill;
  }
  .top{
    width:100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    box-sizing: border-box;
    padding-top: 150px;
  }
  .top_font{
    font-size: 1.9rem;
    color: #fff;
  }
  .top_box{
    margin: auto;
    height: 200px;
    background: white;
  }
</style>
