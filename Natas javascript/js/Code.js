document.getElementById('loginForm-2').addEventListener('submit' , function (e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;
    if (username === "Natas 3" && password === "arlio@12345 - natas3 - 99780") {
        document.getElementById('message-2').innerText = "نام کاربری یا گذرواژه درست است ، You Win ، Pleace Click To Link and Go To Natas 4";
    }else {
        document.getElementById('message-2').innerText = "نام کاربری یا گذرواژه اشتباه است ، You Lose ، You Cant Go To Natas 4";
    }
});