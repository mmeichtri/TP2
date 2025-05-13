const users = [
    {id: 1, nombre: "Melany", edad: 27, nota: 8, email: "melany@gmail.com"},
    {id: 2, nombre: "Sergio", edad: 32, nota: 7, email: "sergio@gmail.com"},
    {id: 3, nombre: "Brenda", edad: 30, nota: 6, email: "brenda@gmail.com"}
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
    if (index == -1){
        throw new Error("Id invalido")
    }
    const newUser = {...users[index], ...user}
    users.splice(index, 1, newUser)
    return users
}

export default{
    getUsers,
    postUser,
    patchUser
}