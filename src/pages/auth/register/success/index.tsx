import AuthLayout from "@/components/layouts/auth-layouts";
import Register from "@/components/views/register";
import RegisterSuccess from "@/components/views/registerSuccess";


const SuccessRegisterPage = () => {
    return(
        <AuthLayout title="Register Success">
           <RegisterSuccess/>
        </AuthLayout>
    )
}


export default SuccessRegisterPage ;