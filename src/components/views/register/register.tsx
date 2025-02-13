import { Button, Card, CardBody, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
    const {visiblePassword, handleVisiblePassword} = useRegister()
    return(
        <div className=" flex w-full items-center justify-center gap-20 flex-row">
            <div className="flex w-1/3 items-center flex-col justify-center gap-5">
                <Image src="/images/ilustrations/logo.svg" alt="logo" width={180} height={180}/>
                <Image src="/images/generals/login.svg" alt="login" width={1024} height={1024}/>
            </div>
            <div>
                <Card>
                    <CardBody className=" p-8">
                        <h2 className="text-xl font-bold text-danger-500">Create Account</h2>
                        <p className="text-small mb-4">
                            Already have an account?&nbsp;
                           <Link href="/login" className="font-semibold text-danger-400">Login</Link>
                        </p>
                        <form className=" w-80 flex flex-col gap-5">
                            <Input 
                            type="text" 
                            variant="bordered"
                            label="Fullname"
                            autoComplete="off"
                            name=""
                            />
                           <Input 
                            type="text" 
                            variant="bordered"
                            label="UserName"
                            autoComplete="off"
                            name=""
                            />
                            <Input 
                            type="email" 
                            variant="bordered"
                            label="Email"
                            autoComplete="off"
                            name=""
                            />
                            <Input 
                            type={visiblePassword.password ? "text" : "password"}
                            variant="bordered"
                            label="Password"
                            autoComplete="off"
                            name=""
                            endContent={
                                <button className=" focus:outline-none " type="button" onClick={() => handleVisiblePassword("password")}>
                                   {visiblePassword.password ? (
                                    <FaEye className="text-xl text-default-400 pointer-events-none"/>
                                   ) : (<FaEyeSlash className="text-xl text-default-400 pointer-events-none"/>)}
                                </button>
                            }
                            />
                              <Input 
                            type={visiblePassword.passwordConfirmation ? "text" : "password"}
                            variant="bordered"
                            label="Password Confirmation"
                            autoComplete="off"
                            name=""
                            endContent={
                                <button className=" focus:outline-none " type="button" onClick={() => handleVisiblePassword("passwordConfirmation")}>
                                   {visiblePassword.passwordConfirmation ? (
                                    <FaEye className="text-xl text-default-400 pointer-events-none"/>
                                   ) : (<FaEyeSlash className="text-xl text-default-400 pointer-events-none"/>)}
                                </button>
                            }
                            />
                            <Button  color="danger" type="submit" size="lg">
                                Register
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Register;