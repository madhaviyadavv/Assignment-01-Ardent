let user = {
    name: "Madhavi",
    email: "madhavi@gmail.com"
};

function register(user) {
    return `${user.name} Registered Successfully`;
}

console.log(register(user));