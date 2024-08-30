document.getElementById('loginForm-4').addEventListener('submit' , function (e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;
    if (username === "Natas 5" && password === "101022021 - natas5@445566 - endnatas@778899 - 12345678910") {
        document.getElementById('message-4').innerText = "نام کاربری یا گذرواژه درست است ، You Winner Game Natas !";
    }else {
        document.getElementById('message-4').innerText = "نام کاربری یا گذرواژه اشتباه است ، You Lose ، You Cant Winner Game Natas !";
    }
});