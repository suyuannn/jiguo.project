var phone = document.getElementById('phone');
var t1 = document.getElementsByClassName('title');
var i_ = document.getElementsByTagName('i');
var span_ = document.getElementsByTagName('span');
var obtainCode_ = document.getElementById('obtainVerifyCode');
// 手机号
phone.onfocus = function () {
    t1[0].style.display = 'block';
}
phone.onblur = function () {
    var phoneValue = phone.value;
    // console.log(phoneValue)
    // 判断值为空
    var reg = /^\s*$/g
    if (reg.test(phoneValue)) {
        i_[0].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[0].innerHTML = '不能为空';
        return false
    }
    var reg = /^1[3-9][0-9]{9}$/
    // console.log(reg.test(phoneValue))
    if (reg.test(phoneValue)) {
        i_[0].style.background = 'url(./images/sprite.jpg) no-repeat -4px -33px';
        span_[0].innerHTML = '正确';
        return false;
    } else {
        i_[0].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[0].innerHTML = '长度不在范围内或者存在非法字符';
        return false;
    }
}
// 图片验证码
var validationCode = document.getElementById('validationCode');
var yzm1 = 'r2b7';
validationCode.onfocus = function () {
    t1[1].style.display = 'block';
}
validationCode.onblur = function () {
    var codeValue = validationCode.value;
    // 判断值为空
    var reg = /^\s*$/g;
    var reg1 = /^[0-9a-zA-Z]{4}$/g;
    if (reg.test(codeValue)) {
        i_[1].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[1].innerHTML = '不能为空';
        return false;
    }
    // 验证码必须为4位
    else if (!reg1.test(codeValue)) {
        // console.log('xx')
        i_[1].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[1].innerHTML = '验证码为4位数字或字母';
        return false;
    } else if (codeValue !== yzm1) {
        i_[1].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[1].innerHTML = '与提示验证码不符合';
        return false;
    } else if (codeValue == yzm1) {
        i_[1].style.background = 'url(./images/sprite.jpg) no-repeat -4px -33px';
        span_[1].innerHTML = '正确';
        return false;
    }
}

// 计时器
var num = 10;
var timer = null;
var yzm = '8899';
obtainCode_.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        num--;
        // console.log('xxx')
        if (num == 9) {
            alert('验证码：' + yzm);
        }
        obtainCode_.innerHTML = '(' + num + '秒)重发';
        if (num == 0) {
            num = 5;
            obtainCode_.innerHTML = '获取验证码';
        }
    }, 1000);
}
// 4为数字验证码
var obtainVerify = document.getElementById('obtainVerify');
obtainVerify.onfocus = function () {
    t1[2].style.display = 'block';
}
obtainVerify.onblur = function () {
    var codeValue = obtainVerify.value;
    // 判断值为空
    var reg = /^\s*$/g;
    var reg1 = /^[0-9]{4}$/g;
    if (reg.test(codeValue)) {
        i_[2].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[2].innerHTML = '不能为空';
        return false;
    }
    // 验证码必须为4位
    else if (!reg1.test(codeValue)) {
        // console.log('xx')
        i_[2].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[2].innerHTML = '验证码为4位数字或字母';
        return false;
    } else if (codeValue !== yzm) {
        i_[2].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[2].innerHTML = '与提示验证码不符合';
        return false;
    } else if (codeValue == yzm) {
        i_[2].style.background = 'url(./images/sprite.jpg) no-repeat -4px -33px';
        span_[2].innerHTML = '正确';
        return false;
    }
}
// 用户名
var userName_ = document.getElementById('userName');
userName_.onfocus = function () {
    t1[3].style.display = 'block';
}
//当用户名框失去焦点
userName_.onblur = function () {
    var userNameValue = userName_.value;
    //判断值为空时
    var reg = /^\s*$/g
    // console.log(reg.test(userNameValue))
    if (reg.test(userNameValue)) {
        i_[3].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[3].innerHTML = '不能为空';
        return false
    }
    // var reg3 = /^[\u4e00-\u9fa5]+$/g;
    // 输入长度不在 6-12 之间并且存在非法字符
    reg = /^[\w\u4e00-\u9fa5]{6,12}$/;
    if (reg.test(userNameValue)) {
        i_[3].style.background = 'url(./images/sprite.jpg) no-repeat -4px -33px';
        span_[3].innerHTML = '正确';
        return false;
    } else {
        i_[3].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[3].innerHTML = '长度不在范围内或者存在非法字符';
        return false;
    }
}
// 密码
//当密码框获取焦点时
var pwd = document.getElementById('pwd');
pwd.onfocus = function () {
    t1[4].style.display = 'block';
}
//当密码框失去焦点时
pwd.onblur = function () {
    var pwdValue = pwd.value;
    var reg = /^\s*$/g; // 判断值为空时
    // console.log(reg.test(pwdValue))
    var reg1 = /^\w{6,12}$/;
    var reg2 = /[^0-9]/; // 判断密码框值全是数字
    var reg3 = /[^A-z]/; //判断密码框全是字母
    // console.log(reg2.test(pwdValue))
    if (reg.test(pwdValue)) {
        i_[4].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[4].innerHTML = '不能为空';
        return false
    }
    // 判断密码框值长度不在 6-12 之间并且非字母数字下划线
    else if (!reg1.test(pwdValue)) {
        i_[4].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[4].innerHTML = '长度不在范围内或者存在非法字符';
        return false;
    }
    // 判断密码框值全是数字
    else if (!reg2.test(pwdValue)) {
        i_[4].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[4].innerHTML = '不能全是数字';
        return false;
    }
    // 则密码框后面的文字显示为“不能  全是字母”
    else if (!reg3.test(pwdValue)) {
        i_[4].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[4].innerHTML = '不能全是字母';
        return false;
    } else {
        i_[4].style.background = 'url(./images/sprite.jpg) no-repeat -4px -33px';
        span_[4].innerHTML = '正确';
        return false;
    }
}
//当确认密码框获取焦点时
var comfirm_pwd = document.getElementById('containPwd');
comfirm_pwd.onfocus = function () {
    t1[5].style.display = 'block';
}
comfirm_pwd.onblur = function () {
    var comfirmValue = comfirm_pwd.value;
    var reg = /^\s*$/g;
    // 判断值为空时
    if (reg.test(comfirmValue)) {
        i_[5].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[5].innerHTML = '不能为空';
        return false
    }
    // 密码与确认密码不一致
    else if (pwd.value != comfirm_pwd.value) {
        i_[5].style.background = 'url(./images/sprite.jpg) no-repeat -4px -60px';
        span_[5].innerHTML = '密码与确认密码不一致';
    }
    // 密码与确认密码一致
    else {
        i_[5].style.background = 'url(./images/sprite.jpg) no-repeat -4px -33px';
        span_[5].innerHTML = '正确';
        return false;
    }
}
var btn = document.getElementById('btn1');
btn.onclick = function () {
    var reg1 = /^1[3-9][0-9]{9}$/; //手机号
    var reg2 = /^[\w\u4e00-\u9fa5]{6,12}$/; //用户名
    if (reg1.test(phone.value) && validationCode.value == yzm1 && obtainVerify.value == yzm && reg2.test(userName_.value) && pwd.value == comfirm_pwd.value) {
        alert('注册成功');
        // window.location.href = 'login.html';

    } else {
        alert('注册失败');
    }
}