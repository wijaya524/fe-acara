import instance from "@/libs/axios/instance"
import endpoint from "./endpoint.constant"
import { IRegister } from "@/types/auth"

const authservices = {
    register: (payload: IRegister) => {instance.post(`${endpoint.AUTH}/register`, payload)},

}


export default authservices;