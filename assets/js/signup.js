

async function handleSignup() {
    const account = document.getElementById("account").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const nickname = document.getElementById("nickname").value
    const categories = document.getElementById("categories").value

    const response = await fetch(`${backend_base_url}/users/signup/`, {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            "account": account,
            "password": password,
            "nickname": nickname,
            "email": email,
            "categories": categories
        })
    })
    return response
}


async function handleSignupButton() {
    const response = await handleSignup();
    const responseData = await response.json();
    const message = responseData.message;
    

    if (response.status == 201) {
        alert("이메일 발송 완료. 이메일 인증 후 회원가입을 완료해주세요")
        window.location.replace(`/login.html`)
    }
    else {
        console.log(message)
        alert(message);
    }
}

// checkLogin()