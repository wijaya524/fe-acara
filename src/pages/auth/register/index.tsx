import AuthLayout from "@/components/layouts/auth-layouts";
import Register from "@/components/views/register";


const RegisterPage = () => {
    return(
        <AuthLayout title="Register">
          <Register/>
        </AuthLayout>
    )
}


export default RegisterPage;