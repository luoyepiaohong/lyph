function addLoadEvent(func){//addLoadEvent方法
var oldonload=window.onload;
if(typeof window.onload!='function'){//第一次加载执行
 window.onload=func;   
}else{
window.onload=function(){
  oldonload();
  func();   
}
}
}