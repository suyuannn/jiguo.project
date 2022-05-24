// 登录
var form = document.getElementsByTagName('form')[0];
form.addEventListener('invalid', function (event) {
    var elem = event.target; //返回时间的dom节点
    var vali = elem.validity; //布尔属性值，返回 input 输入值是否合法
    var name = elem.name; //拿到input中 的name 属性
    // console.log(elem)
    switch (name) {
        case 'userName':
            if (vali.valueMissing) { //如果元素 (required 属性) 没有值。
                elem.setCustomValidity('用户名不能为空')
            } else if (vali.patternMismatch) { // 不匹配设置的属性
                elem.setCustomValidity('请输入合法的邮箱、手机号码或者2-4位的汉字昵称');
            } else {
                elem.setCustomValidity('');
            }
            break;
        case 'pwd':
            if (vali.valueMissing) {
                elem.setCustomValidity('密码不能为空');
            } else if (vali.patternMismatch) {
                elem.setCustomValidity('密码为6-10位字符');
            } else {
                elem.setCustomValidity('');
            }
            break;
    }
}, true);
// cookie
// 方法一
var auto_login = document.getElementById('auto_login');
var btn1 = document.getElementById('btn1')
console.log(localStorage.getItem('isRember'))
if (localStorage.getItem('isRember')) {
    // console.log('哈哈哈')
    document.getElementById('userName').value = localStorage.getItem('userName');
    document.getElementById('pwd').value = localStorage.getItem('password');
    document.getElementById('auto_login').checked = localStorage.getItem('isRember');
}
auto_login.onclick = function () {
    var userName_ = document.getElementById('userName').value;
    console.log(userName_)
    var pwd_ = document.getElementById('pwd').value;
    var isRember_ = document.getElementById('auto_login').checked;
    if (isRember_) {
        localStorage.setItem('userName', userName_);
        localStorage.setItem('password', pwd_);
        localStorage.setItem('isRember', isRember_);
    } else {
        localStorage.removeItem('userName', userName_);
        localStorage.removeItem('password', pwd_);
        localStorage.removeItem('isRember', isRember_);
    }
}