// ajax获取数据
var all = document.getElementsByClassName('alls')[0];
$.ajax({
    url: './json/tryDetail.json',
    type: 'get',
    async: true,
    dateType: 'json',
    error: function () {
        console.log('请求错误')
    },
    success: function (data) {
        // var data_ = JSON.stringify(data)
        // console.log(data_)
        show(data);
    }
});

function show(dataList) {
    // console.log(dataList)
    var str = '';
    for (var item of dataList) {
        str += `
        <li>
            <div class="tableBox3pic"> 
                <i></i>  
                <span>${item.info_ty}</span>
                <a href='#'><img src='${item.img}'></a>
            </div>
            <a href="#" class="tableBox3Title">${item.text}</a>
            <div class="btnBox clearfix">
                <a class="btnBox1 fl mr15">${item.totalnum}</a>
                <a class="btnBox1 fl">${item.num}</a>
            </div>
            <p class="apply mt10">
                <span>${item.apply}</span>
                <a href="#">申请</a>
            </p>
            <p class="reportNum mt5">
                <a href="#" class="reportNum1">剩余时间:</a>
                <span>${item.time}</span>
            </p>
        </li>
        `;
    }
    // console.log(str)
    all.innerHTML = str;
}