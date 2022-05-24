//报告精选
function fn() {
    // 1、创建对象
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
    //2、建立连接
    ajax_.open('get', 'http://127.0.0.1:3000/report/hot', true);
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
        // console.log(arr[i]);
        str += `
         <li class="listJX">
                    <a href="#">
                        <img class="imges" src="${arr[i].img}" width="221" height="130" /></a>
                        <div class="info">
                            <p class="name">${arr[i].text}</p>
                                <div class="right">
                                <span class="nick left">● 苏苏</span>
                                <button class="iconfont icon-zan zanbu" onclick="arr()"></button><span class="zan">3</span>
                                <button class="iconfont icon-pinglun"></button><span class="look"> 3</span>
                                </div>
                        </div>
                    
                </li>
        `
    }
    var ul = document.getElementById('baogao');
    ul.innerHTML = str;
}

// 发现酷玩
function fmn() {
    // 1、创建对象
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTT');
    //2、建立连接
    ajax_.open('get', 'http://127.0.0.1:3000/report/new', true);
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                arry(data);
                // console.log(data);
            }
        }
    }
}
fmn()

function arry(tex) {
    var str = '';
    for (var i = 0; i < 13; i++) {
        // console.log(tex[i]);
        str += `
        <li class="listJX">
        <a href="use/detail.html">
            <img src="./images/k1.jpg" width="220" height="130" /></a>
        <div class="info">
            <p class="name">SCiO 微型光谱仪<span>可以测定食物成分及营养</span></p>
            <div class="tip fix">
                <span class="price left">￥ 1212</span>
                <div class="right icon">
                    <button class="iconfont icon-icon_xihuan_mian xinbu " onclick="ajj() "></button><span class="xin ">3</span>
                    <button class="iconfont icon-pinglun "></button><span class="look "> 3</span>
                </div>
            </div>
        </div>
    </li>
    <li class="listJX">
        <a href="use/detail.html">
            <img src="./images/k2.jpg" width="220" height="130" /></a>
        <div class="info">
            <p class="name">B&O BeoSound 35 音响<span>支持所有音乐流媒体服务</span></p>
            <div class="tip fix">
                <span class="price left">￥ 512</span>
                <div class="right icon">
                    <button class="iconfont icon-icon_xihuan_mian xinbu " onclick="ajj() "></button><span class="xin ">3</span>
                    <button class="iconfont icon-pinglun "></button><span class="look "> 3</span>
                </div>
            </div>
        </div>

    </li>
    <li class="listJX">
        <a href="use/detail.html">
            <img src="./images/k3.jpg" width="220" height="130" /></a>
        <div class="info">
            <p class="name">Mozbii 触控吸色笔<span>能吸取65000种颜色</span></p>
            <div class="tip fix">
                <span class="price left">￥ 暂无</span>
                <div class="right icon">
                    <button class="iconfont icon-icon_xihuan_mian xinbu " onclick="ajj() "></button><span class="xin ">3</span>
                    <button class="iconfont icon-pinglun "></button><span class="look "> 3</span>
                </div>
            </div>
        </div>

    </li>
    <li class="listJX">
        <a href="use/detail.html">
            <img src="./images/k4.jpg" width="220" height="130" /></a>
        <div class="info">
            <p class="name">XPLORER 2 航拍飞行器<span>搭载自动避障系统</span></p>
            <div class="tip fix">
                <span class="price left">￥ 433</span>
                <div class="right icon">
                    <button class="iconfont icon-icon_xihuan_mian xinbu " onclick="ajj() "></button><span class="xin ">3</span>
                    <button class="iconfont icon-pinglun "></button><span class="look "> 3</span>
                </div>
            </div>
        </div>
    </li>
           `
    }
    var ul = document.getElementsByClassName('fxkw')[0];
    ul.innerHTML = str;
}