document.getElementById('loginForm').addEventListener('submit' , function (e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;
    if (username === "Natas 1" && password === "1234@natas1 - 5678") {
        document.getElementById('message').innerText = "نام کاربری یا گذرواژه درست است ، You Win ، Pleace Click To Link and Go To Natas 2";
    }else {
        document.getElementById('message').innerText = "نام کاربری یا گذرواژه اشتباه است ، You Lose ، You Cant Go To Natas 2";
    }
});