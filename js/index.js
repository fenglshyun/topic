window.onload=function () {
    //获取 li 也就是选项卡选项tab
    var nav=document.getElementById('nav');
    var oNav=nav.getElementsByTagName('li');
    //获取 包裹在container里面的section（内容）
    var container=document.getElementById('container');
    var oDiv=container.getElementsByClassName('tab');
    //使用 循环依次得到li 
    for(var i=0;i<oNav.length;i++){
     oNav[i].index=i;
    //每一次得到li后执行鼠标点击操作则触发函数function  
     oNav[i].onclick=function () {
     
        //此处除了可以使用onclick，还可以使用onmouseover
    //在li的个数内依次展示内容  
     for(var i=0;i<oNav.length;i++){
      oNav[i].className='';
      oDiv[i].style.display="none";
     
     }
     this.className='act';
     oDiv[this.index].style.display="block"
     }
     for(var m=1;m<oNav.length;m++){
      oNav[m].className='';
      oDiv[m].style.display="none";
     }
    }
   };
  function bar_content(){
    var con = document.querySelector('.text_keyword');
    var txtBox = document.querySelector('.content_keyword');
    var box_number = document.getElementsByClassName('box');
    console.log(box_number);
    var bar = document.querySelector('.scroll');
    var drdap = document.querySelector('.bar');
    //滚动条的高度 = 内容高度/内容盒子高度*内容高度
    drdap.style.height = con.offsetHeight/txtBox.offsetHeight*con.offsetHeight + 'px';
    drdap.onmousedown = function(ev){
     var disy = ev.clientY - drdap.offsetTop;
     document.onmousemove = function(ev){
     var currtY= ev.clientY - disy;
     if (currtY<0) { currtY = 0;}
     if (currtY>bar.offsetHeight-drdap.offsetHeight) {currtY = bar.offsetHeight-drdap.offsetHeight;}
     drdap.style.top = currtY + 'px';
     var scalY = currtY/(bar.offsetHeight-drdap.offsetHeight);
     console.log(txtBox.offsetHeight * scalY)
     txtBox.style.top = scalY * (con.offsetHeight - txtBox.offsetHeight ) + 'px'
     }
     document.onmouseup = function(ev){
     document.onmousemove = null;
     }
     return false;
    }
   
  }

  function bar_place(){
    var con = document.querySelector('.text_place');
 var txtBox = document.querySelector('.content_place');
 var bar = document.querySelector('.scroll_place');
 var drdap = document.querySelector('.bar_place');
 //滚动条的高度 = 内容高度/内容盒子高度*内容高度
 drdap.style.height = con.offsetHeight/txtBox.offsetHeight*con.offsetHeight + 'px';
 drdap.onmousedown = function(ev){
  var disy = ev.clientY - drdap.offsetTop;
  document.onmousemove = function(ev){
  var currtY= ev.clientY - disy;
  if (currtY<0) { currtY = 0;}
  if (currtY>bar.offsetHeight-drdap.offsetHeight) {currtY = bar.offsetHeight-drdap.offsetHeight;}
  drdap.style.top = currtY + 'px';
  var scalY = currtY/(bar.offsetHeight-drdap.offsetHeight);
  console.log(txtBox.offsetHeight * scalY)
  txtBox.style.top = scalY * (con.offsetHeight - txtBox.offsetHeight ) + 'px'
  }
  document.onmouseup = function(ev){
  document.onmousemove = null;
  }
  return false;
 }
  }
  function bar_organization(){
    var con = document.querySelector('.text_organization');
 var txtBox = document.querySelector('.content_organization');
 var bar = document.querySelector('.scroll_organization');
 var drdap = document.querySelector('.bar_organization');
 //滚动条的高度 = 内容高度/内容盒子高度*内容高度
 drdap.style.height = con.offsetHeight/txtBox.offsetHeight*con.offsetHeight + 'px';
 drdap.onmousedown = function(ev){
  var disy = ev.clientY - drdap.offsetTop;
  document.onmousemove = function(ev){
  var currtY= ev.clientY - disy;
  if (currtY<0) { currtY = 0;}
  if (currtY>bar.offsetHeight-drdap.offsetHeight) {currtY = bar.offsetHeight-drdap.offsetHeight;}
  drdap.style.top = currtY + 'px';
  var scalY = currtY/(bar.offsetHeight-drdap.offsetHeight);
  console.log(txtBox.offsetHeight * scalY)
  txtBox.style.top = scalY * (con.offsetHeight - txtBox.offsetHeight ) + 'px'
  }
  document.onmouseup = function(ev){
  document.onmousemove = null;
  }
  return false;
 }
  }
  function bar_emotion(){
    var con = document.querySelector('.text_b_emotion');
 var txtBox = document.querySelector('.text_context_emotion');
 var bar = document.querySelector('.scroll_emotion');
 var drdap = document.querySelector('.bar_emotion');
 //滚动条的高度 = 内容高度/内容盒子高度*内容高度
 drdap.style.height = con.offsetHeight/txtBox.offsetHeight*con.offsetHeight + 'px';
 drdap.onmousedown = function(ev){
  var disy = ev.clientY - drdap.offsetTop;
  document.onmousemove = function(ev){
  var currtY= ev.clientY - disy;
  if (currtY<0) { currtY = 0;}
  if (currtY>bar.offsetHeight-drdap.offsetHeight) {currtY = bar.offsetHeight-drdap.offsetHeight;}
  drdap.style.top = currtY + 'px';
  var scalY = currtY/(bar.offsetHeight-drdap.offsetHeight);
  console.log(txtBox.offsetHeight * scalY)
  txtBox.style.top = scalY * (con.offsetHeight - txtBox.offsetHeight ) + 'px'
  }
  document.onmouseup = function(ev){
  document.onmousemove = null;
  }
  return false;
 }
  }
  bar_emotion();

  function bar_total(){
    var con = document.querySelector('.text_total');
 var txtBox = document.querySelector('.content_total');
 var bar = document.querySelector('.scroll_total');
 var drdap = document.querySelector('.bar_total');
 //滚动条的高度 = 内容高度/内容盒子高度*内容高度
 drdap.style.height = con.offsetHeight/txtBox.offsetHeight*con.offsetHeight + 'px';
 drdap.onmousedown = function(ev){
  var disy = ev.clientY - drdap.offsetTop;
  document.onmousemove = function(ev){
  var currtY= ev.clientY - disy;
  if (currtY<0) { currtY = 0;}
  if (currtY>bar.offsetHeight-drdap.offsetHeight) {currtY = bar.offsetHeight-drdap.offsetHeight;}
  drdap.style.top = currtY + 'px';
  var scalY = currtY/(bar.offsetHeight-drdap.offsetHeight);
  console.log(txtBox.offsetHeight * scalY)
  txtBox.style.top = scalY * (con.offsetHeight - txtBox.offsetHeight ) + 'px'
  }
  document.onmouseup = function(ev){
  document.onmousemove = null;
  }
  return false;
 }
}
