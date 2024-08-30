document.getElementById('loginForm-3').addEventListener('submit' , function (e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;
    if (username === "Natas 4" && password === "wqwqwq@12345 - natas4 - 99100") {
        document.getElementById('message-3').innerText = "نام کاربری یا گذرواژه درست است ، You Win ، Pleace Click To Link and Go To Natas 5";
    }else {
        document.getElementById('message-3').innerText = "نام کاربری یا گذرواژه اشتباه است ، You Lose ، You Cant Go To Natas 5";
    }
});