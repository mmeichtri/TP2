const users = [
    {id: 1, nombre: "Melany", nota: 8,email: "melany@gmail.com"},
    {id: 2, nombre: "Sergio", nota: 7,email: "sergio@gmail.com"},
    {id: 3, nombre: "Brenda", nota: 6,email: "brenda@gmail.com"}
]

const getUsers = async() =>{
    return await users
}

const postUser = async (user)=>{
    users.push(user)
    return users
}

const patchUser = async (id, user)=>{
    const index = users.findIndex((e)=> e.id==id)
    const newUser = {...users[index], ...user}
    users.splice(index, 1, newUser)
    return users
}

export default{
    getUsers,
    postUser,
    patchUser
}