// Coldplay  js
var classify = document.getElementsByClassName('classify')[0].children;


for(var i = 0;i<classify.length;i++){
    classify[0].className = 'red';
    classify[i].className = '';
    classify[i].onclick = function(){
      return  this.className = 'red';
           
    }
    
}
function ajax_(){
    var ajax = new XMLHttpRequest()
    ajax.open('get','http://127.0.0.1:3000/play/hot')
    ajax.send()
    ajax.onreadystatechange = function(){
        if(ajax.readyState==4){
            if(ajax.status==200){
                // console.log(ajax.responseText+'----'); 
                var arry = JSON.parse(ajax.responseText);
                render(arry)
            }
        }
    }
}


function render(data){
   var str = '';
   for(var item of data){
       for(var atem of item){
        //    console.log(atem);
        // console.log(atem.text);
            
       str+=`
       <li>
            <a href="#">
                 <img src="${atem.img}" width="220" height="130">
                    <div class="newest">
                        <p>
                            ${atem.text}<br>
                            <span>${atem.description}</span>
                        </p>
                        <div class="money">
                            <span>${atem.price}</span>
                            <div class="back_img">
                                <span>${atem.like}</span>
                                <span>${atem.words}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
       `
       }
   }
   var back_list = document.getElementsByClassName('back_list')[0]
   back_list.innerHTML = str;
}



