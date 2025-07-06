// 假设的初始账号密码
const initialUsername = 'user';
const initialPassword = '123123';

// 显示登录界面
function showLogin() {
    document.getElementById('login-box').style.display = 'block';
    document.getElementById('register-box').style.display = 'none';
}

// 显示注册界面
function showRegister() {
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('register-box').style.display = 'block';
}

// 处理登录
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === initialUsername && password === initialPassword) {
        alert('登录成功！');
        // 登录成功后跳转到指定的地址（修改成你需要跳转的URL）
        window.location.href = "http://115.190.77.35/chat/wfutVWHn0GC3Hd7B";  // 将 https://www.example.com 替换成你想跳转的地址
    } else {
        alert('用户名或密码错误！');
    }
});

// 处理注册
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    // 注册时我们这里不做详细验证，只是显示注册成功提示
    alert('注册成功！您可以使用这个账号登录。');
    // 模拟切换回登录页面
    showLogin();
});

// 默认显示登录界面
showLogin();
