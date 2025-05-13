import userService from "../services/services.js"
import fs from "fs"

const getUsers = async(req, res)=>{
    const data = await userService.getUsers()
    res.send(data)
}

const postUser = async(req, res)=>{
    try{
        const user = req.body
        if(Object.keys(user).includes("id") && Object.keys(user).includes("nota")){
            const data = await userService.postUser(user)
            const texto = "Agregado: "+ JSON.stringify(user)+ "\n"
            fs.appendFileSync("./logger.txt", texto)
            res.send(data)
        }else{
            throw new Error("Id, y nota son requeridos")
        }
    }catch(error){
        res.send(error.message)
    }
    
}

const patchUser = async(req, res)=>{
    try{
        const {id} = req.params
        const data = req.body
        const rsp = await userService.patchUser(id, data)
        const texto = "Actualizado: " + id + " con: "+ JSON.stringify(data)+ "\n"
        fs.appendFileSync("./logger.txt", texto)
        res.send(rsp)
    }catch(error){
        res.send(error.message)
    }
}

export default{
    getUsers,
    postUser,
    patchUser
}