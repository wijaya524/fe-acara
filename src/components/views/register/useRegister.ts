import { useState } from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IRegister } from "@/types/auth"
import authservices from "@/services/auth"
import {Register, useMutation} from "@tanstack/react-query"
import { useRouter } from "next/router"

const registerSchema = yup.object().shape({
  fullName: yup.string().required("Fullname is required"),
  userName: yup.string().required("Username is required"),
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup.string().min(8, "Minimal 8 Character").required("Password is required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), ""], "Password must match")
})

const useRegister = () => {
  const router = useRouter()
    const [visiblePassword, setVisiblePassword] = useState({
        password: false,
        passwordConfirmation: false
    })

    const handleVisiblePassword = (key: "password" | "passwordConfirmation") => {
      setVisiblePassword({
        ...visiblePassword,
        [key]: !visiblePassword[key]
      })
    }

    const {control, handleSubmit, formState: {errors}, reset, setError} = useForm({
      resolver: yupResolver(registerSchema)
    })

    const registerService = async (payload: IRegister) => {
      const result = await authservices.register(payload)
      return result
    }

    const {mutate: mutateRegister, isPending: isPendingRegister} = useMutation({
      mutationFn: registerService,
      onError(error){
        setError("root", {
           message: error.message
        })
      },
      onSuccess(){
        router.push("/auth/register/success")
        reset()
      }
    })

    const handleRegister = (data: IRegister) => mutateRegister(data)

    return {
        visiblePassword,
        handleVisiblePassword,
        control,
        handleSubmit,
        handleRegister,
        isPendingRegister,
        errors
    }
}

export default useRegister;

