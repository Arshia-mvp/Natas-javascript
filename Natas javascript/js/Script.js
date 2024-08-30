document.getElementById('loginForm-1').addEventListener('submit' , function (e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;
    if (username === "Natas 2" && password === "110010 - 24321@natas2") {
        document.getElementById('message-1').innerText = "نام کاربری یا گذرواژه درست است ، You Win ، Pleace Click To Link and Go To Natas 3";
    }else {
        document.getElementById('message-1').innerText = "نام کاربری یا گذرواژه اشتباه است ، You Lose ، You Cant Go To Natas 3";
    }
});