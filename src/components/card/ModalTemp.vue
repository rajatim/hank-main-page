<template>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">聯絡方式</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <ul>
          <li><span>手機-</span><span>0986952005</span></li>
          <li><span>Mail-</span><span>mini998839@gamil.com</span></li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"><a href="mailto:mini998839@gmail.com">寄送Mail</a></button>
        <button type="button" class="btn btn-primary"><a href="tel:0986952005">撥打電話</a>
</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
import $ from 'jquery';
export default {
  props: ["modal"],
  data(){
    return{

    }
  },
  mounted() {
    $(function() {
        $(window).scroll(function(evt) {
            if ($(window).scrollTop() > 200)
                $(".deleted-wrap").addClass("active");
            else
                $(".deleted-wrap").removeClass("active");
        });
    });
  }
}
</script>
<style scoped>

.modal-content{
  padding: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.modal-body ul{
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0px;
  padding: 0px;
}
.modal-body ul li{
  line-height: 40px;
  margin-left: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.modal-body ul li span:nth-child(1){
  width:80px;
  font-weight: 900;
  font-family: serif;
}
.modal-body ul li span:nth-child(2){
  font-family: serif;
}
.modal-open .modal {
    overflow-x: hidden;
    background-color: rgba(0%,0%,0%,0.7);
    overflow-y: auto;
}
.btn-secondary{
  background-color: #FAD54D;
  border:none;
  color:#000;
  border-radius: 80px;
  padding-left: 30px;
  padding-right: 30px;
}
.btn-secondary a{
  color:#000;
}
.btn-primary{
  background-color: #000;
  border:none;
  color:#fff;
  border-radius: 80px;
  padding-left: 30px;
  padding-right: 30px;
}
.btn-primary a{
  color:#fff!important;
}
@media screen and (max-width: 600px) {
.modal-body ul li{
  line-height: 40px;
  margin-left: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal-body ul li span:nth-child(1){
  width:100%;
  text-align: center;
  font-weight: 900;
  font-family: serif;
}
.modal-footer{
  align-items: center;
  justify-content: center;
}
.modal-footer button{
  margin-top: 20px;
}
.modal-content{
  padding: 20px;
}
}
</style>