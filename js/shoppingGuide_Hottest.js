// var classify = document.getElementsByClassName('classify')[0].children;
// console.log(classify);

// for(var i = 0;i<classify.length;i++){
//     classify[1].className = 'red';
//     classify[i].className = '';
// }

function ajax_(){
    var ajax = new XMLHttpRequest()
    ajax.open('get','http://127.0.0.1:3000/guid/hot')
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
     // console.log(data);
    for(var item of data){
     //  console.log(item);
        str+=`
        <li>
            <a href="./shoppingGuide_minute.html">
                  <img src="${item.img}" width="220" height="130">
                     <div class="newest">
                         <p>
                             ${item.text}<br>
                             
                         </p>
                         <div class="money">
                             
                             <div class="back_img">
                                 <span onclick="a()" class="z">${item.like}</span>
                                 <span>${item.words}</span>
                             </div>
                         </div>
                     </div>
                 </a>
             </li>
        `
       
    }
    var back_list = document.getElementsByClassName('back_list')[0]
    back_list.innerHTML = str;
 }
 var load_b = document.getElementsByClassName('load_b')[0];
 load_b.onclick = function(){
     load_b.className = 'load_b load_a'
     load_b.innerHTML='正在加载中'
 }