import userService from "../services/services.js"


const getUsers = async(req, res)=>{
    const data = await userService.getUsers()
    res.send(data)
}

const postUser = async(req, res)=>{
    const user = req.body
    if(Object.keys(user).includes("nombre")){
        const data = await userService.postUser(user)
        res.send(data)
    }else{
        res.send("No existen datos")
    }
}

const patchUser = async(req, res)=>{
    const {id} = req.params
    const data = req.body
    const rsp = await userService.patchUser(id, data)
    res.send(rsp)
}

export default{
    getUsers,
    postUser,
    patchUser
}