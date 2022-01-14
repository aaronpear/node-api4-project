module.exports = { get, register, login };

const users = [
    {
        id: 0,
        username: 'Billy',
        password: '12345'
    },
    {
        id: 1,
        username: 'Jasmine',
        password: 'hotdog16'
    },
    {
        id: 2,
        username: 'sh4d0wPrInc3',
        password: 'froggies!'
    },
    {
        id: 3,
        username: 'John Cena',
        password: 'ApplePie112'
    }
]

function get() {
    return users;
}

function register(user) {
    if (!user.username || !user.password) {
        return null;
    } else {
        const randId = Math.floor(Math.random() * 9999);
        const newUser = {
            id: randId,
            username: user.username,
            password: user.password
        }
        users.push(newUser);
        console.log(users);
        return users.find(element => element.id === randId);
    }
}

function login(user) {
    return users.find(element => element.username === user.username && element.password === user.password);
}
  