//报告精选
function fn() {
    // 1、创建对象
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
    //2、建立连接
    ajax_.open('get', 'http://127.0.0.1:3000/guid/new', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                show(data)
            }
        }
    }
}
fn()

function show(arr) {
    var str = '';
    for (var i = 0; i < 8; i++) {
        console.log(arr[i]);
        str += `
        <a href="">
        <li>
            <img src="${arr[i].img}" alt="">
            <div class="boxp">
                <p>${arr[i].text}</p>
                <div class="pinlun">
                    <span class="logo"></span>
                    <span class="texti">苏苏</span>
                    <span class="time">2016-01-25</span>
                    <span class="iconfont icon-zan"></span>
                    <span class="zan">${arr[i].like}</span>
                    <span class="iconfont icon-pinglun"></span>
                    <span class="look">${arr[i].words}</span>
                </div>
            </div>
            <p class="weib">${arr[i].text}</p>
        </li>
    </a>
        `
    }
    var ul = document.getElementById('zhuti');
    ul.innerHTML = str
}


// 下拉
var xiala = document.getElementsByClassName('xiala')[0];
var yin = document.getElementsByClassName('zutibox')[0];
console.log(yin);

function xia() {
    yin.style.height = 3908 + "px"
    xiala.style.display = "none"
}

// 放大镜效果
var bu = document.getElementsByClassName('iconfont')[0];
var input_ = document.getElementById('input1');
bu.onclick = function() {
    input_.className = "onkik"
}
bu.ondblclick = function() {
    input_.className = ""
}