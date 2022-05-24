// 放大镜效果
var bu = document.getElementsByClassName('iconfont')[0];
var input_ = document.getElementById('input1');
bu.onclick = function() {
    input_.className = "onkik"
}
bu.ondblclick = function() {
    input_.className = ""
}

// 倒计时
function fu() {
    var nt = new Date();
    var t_ = new Date(2022, 5, 1, );
    var go_ = t_ - nt;
    var day = Math.floor(go_ / 1000 / 60 / 60 / 24);
    var h = Math.floor(go_ / 1000 / 60 / 60 % 24);
    var m = Math.floor(go_ / 1000 / 60 % 60);
    var s = Math.floor(go_ / 1000 % 60);
    document.getElementById('time').innerHTML = ('申请时间剩余：' + day + '天' + h + '时' + m + '分' + s + '秒');
    if (day < 0 && h < 0 && m < 0 && s < 0) {
        clearInterval(fu);
        document.getElementById('time').innerHTML = ('到此为止')
    }
}
setInterval(fu, 1000)

// 下拉
var xiala = document.getElementsByClassName('xiala')[0];
var yin = document.getElementById('block4');
// console.log(yin);

function xia() {
    yin.style.height = 3550 + "px"
    xiala.style.display = "none"
}


//点赞
var zan = document.getElementsByClassName('zan');
var zanbu = document.getElementsByClassName('zanbu')
    // console.log(zanbu);

function arr() {
    for (var i = 0; i < zan.length; i++) {
        var vo = zan[i].innerHTML;
        vo = vo - 0;
        vo += 1;
        // console.log(vo);
        zan[i].innerHTML = vo
    }

    for (var j = 0; j < zanbu.length; j++) {
        var p = zanbu[j]
            // console.log(p);
        p.id = "buutt "
    }
}


// 喜欢
var xin = document.getElementsByClassName('xin');
var xinbu = document.getElementsByClassName('xinbu')

function ajj() {
    for (var i = 0; i < xin.length; i++) {
        var vo = xin[i].innerHTML;
        vo = vo - 0;
        vo += 1;
        // console.log(vo);
        xin[i].innerHTML = vo
    }

    for (var j = 0; j < xinbu.length; j++) {
        var p = xinbu[j]
            // console.log(p);
        p.id = "but"
    }
}