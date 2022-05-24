// table1切换
// table1
var tableBoxTitle = document.getElementsByClassName('tableBoxTitle')[0].children;
// table2,所有的li
var tabox2lis = document.getElementsByClassName('tableBox2')[0].children[0].children
for (var i = 0; i < tableBoxTitle.length; i++) {
    tableBoxTitle[i].ind = i;
    tableBoxTitle[i].onclick = function () {
        for (var j = 0; j < tableBoxTitle.length; j++) {
            tableBoxTitle[j].classList.remove('tableT1_active');
        }
        this.classList.add('tableT1_active');
    }
}
var tableBox3 = document.getElementsByClassName('tableBox3')[0].children;
// tab切换封装
function tab(shuzu, shuzu2) {
    for (var i = 0; i < shuzu.length; i++) {
        shuzu[i].index = i;
        shuzu[i].onclick = function () {
            // console.log(this.index)
            for (var j = 0; j < shuzu.length; j++) {
                shuzu[j].classList.remove('liActive');
                shuzu2[j].style.display = 'none';
            }
            this.classList.add('liActive');
            shuzu2[this.index].style.display = 'block';
        }
    }
}
tab(tabox2lis, tableBox3);
// ajax数据渲染1
function getData() {
    var dataList = [];
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/useing/public');
    // ajax_.open('get', 'http://127.0.0.1:3000/report/hot');
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var str = ajax_.responseText;
                dataList = JSON.parse(str);
                // console.log(str)
                // console.log(dataList)
                show(dataList)
            } else {
                console.log('请求ajax错误')
            }
        }
    }

    var ul_1 = document.getElementsByClassName('all')[0];
    var ul_3 = document.getElementsByClassName('trialing')[0];

    function show(dataList) {
        // console.log(dataList)
        var str = '';
        for (var item of dataList) {
            str += `
                <li>
                    <div class="tableBox3pic"> 
                        <a class='a11' href="tryDetail.html"></a>  
                        <span>${item.info_ty}</span>
                        <a href='tryDetail.html'><img src='${item.img}'></a>
                    </div>
                    <a href="tryDetail.html" class="tableBox3Title">${item.text}</a>
                    <div class="btnBox clearfix">
                        <a class="btnBox1 fl mr15">${item.totalnum}</a>
                        <a class="btnBox1 fl">${item.num}</a>
                    </div>
                    <p class="apply mt10">
                        <span>${item.apply}</span>
                        <a href="tryDetail.html">申请</a>
                    </p>
                    <p class="reportNum mt5">
                    <a href="#" class="reportNum1">报告数量:</a>
                    <span>8</span>
                </p>
                </li>
                `;
        }
        ul_1.innerHTML = str;
        ul_3.innerHTML = str;
    }
}
getData();
// ajax数据渲染1
function getData1() {
    var dataList = [];
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/useing/master');
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var str = ajax_.responseText;
                dataList = JSON.parse(str);
                // console.log(str)
                // console.log(dataList)
                show(dataList)
            } else {
                console.log('请求ajax错误')
            }
        }
    }
    var ul_2 = document.getElementsByClassName('appling')[0];
    var ul_4 = document.getElementsByClassName('finishing')[0];

    function show(dataList) {
        // console.log(dataList)
        var str = '';
        for (var item of dataList) {
            str += `
                <li>
                    <div class="tableBox3pic"> 
                        <a class='a11' href="tryDetail.html"></a>  
                        <span>${item.info_ty}</span>
                        <a href='#'><img src='${item.img}'></a>
                    </div>
                    <a href="tryDetail.html" class="tableBox3Title">${item.text}</a>
                    <div class="btnBox clearfix">
                        <a class="btnBox1 fl mr15">${item.totalnum}</a>
                        <a class="btnBox1 fl">${item.num}</a>
                    </div>
                    <p class="apply mt10">
                        <span>${item.apply}</span>
                        <a href="tryDetail.html">申请</a>
                    </p>
                    <p class="reportNum mt5">
                    <a href="#" class="reportNum1">报告数量:</a>
                    <span>8</span>
                </p>
                </li>
                `;
            // console.log(item.info_ty)
            var spanClass = document.getElementsByClassName('tableBox3pic')[0].firstElementChild.nextElementSibling;
            // console.log(spanClass);
            if ((item.info_ty.indexOf('体验师转享') - 0) !== -1) {
                // console.log('xxx');
                // console.log(spanClass)
                spanClass.className = 'spanActive';
            }
        }
        ul_2.innerHTML = str;
        ul_4.innerHTML = str;
    }
}
getData1();
//向下加载更多 
// 懒加载
$('.loadmore>a').click(function () {
    $(this).addClass('ld')
})