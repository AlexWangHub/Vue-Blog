<template>
  <div class="qrcode_container">
    <div class="tencent_code">
      <h4>关注作者公众</h4>
      <p>和万千小伙伴一起学习</p>
      <img src="/ggh.jpg" alt="">
    </div>
    <div class="group_code">
      <h4>加入技术交流群</h4>
       <p>扫描二维码 备注<span> 加群</span></p>
       <img src="/wechat.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name:"qrcode"
}
</script>


<style scoped>
.qrcode_container{
  position: fixed;
  right: 0;
  top: 110px;
  width: 140px;
  padding: 20px 10px;
  /* border-left: 1px solid rgba(0,127,255 ,0.2); */
  text-align: center;
  background-color:#fff;
  /* height: 100%; */
  box-shadow: -1px 0 2px 0.5px rgba(0,127,255 ,0.2);
}
.qrcode_container >div img{
  width: 140px;
}
.qrcode_container >div h4{
  font-size: 15px;
  color: #007fff;
  margin: 0;
}
.qrcode_container >div p{
  font-size: 12px;
  margin: 10px 0;
}
.qrcode_container >div p span{
  color: #007fff;
  font-weight: bold;
}
.tencent_code{
  margin-bottom: 40px;
}
@media screen and (max-width: 1360px) {
  .qrcode_container{
    display: none;
  }
}
</style>

