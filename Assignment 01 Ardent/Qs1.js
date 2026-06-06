function login(username, password) {
    if (username === "admin" && password === "12345") {
        return "Login Successful";
    } else {
        return "Invalid Fail";
    }
}

console.log(login("admin", "12345"));
