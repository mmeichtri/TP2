import userModel from "../models/models.js"

const getUsers = async()=>{
    const data = await userModel.getUsers()
    return data
}


const postUser = async(user)=>{
    const data = await userModel.postUser(user)
    return data
}

const patchUser = async(id, user)=>{
    const data = await userModel.patchUser(id, user)
    return data
}

export default{
    getUsers,
    postUser,
    patchUser
}