import { Button, Card, CardBody, Input, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Controller } from "react-hook-form";
import { cn } from "@/utils/cn";

const Register = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 md:flex-row md:gap-20 p-4">
  <div className="w-full md:w-1/3 flex flex-col items-center justify-center gap-5">
    <Image
      src="/images/ilustrations/logo.svg"
      alt="logo"
      width={180}
      height={180}
    />
    <Image
      src="/images/generals/login.svg"
      alt="login"
      className="w-full h-auto"
      width={1024}
      height={1024}
    />
  </div>
  <div className="w-full  md:w-auto">
    <Card>
      <CardBody className="p-6 md:p-8">
        <div className=" text-center">
        <h2 className="text-2xl font-bold text-danger-500">Create Account</h2>
        <p className="mb-4 text-sm md:text-base">
          Already have an account?&nbsp;
          <Link href="/auth/login" className="font-semibold text-danger-400">
            Login
          </Link>
        </p>
        </div>
        {errors.root && (
          <p className="text-danger-500 text-sm">{errors.root.message}</p>
        )}
        <form
          className={cn(
            "flex w-full flex-col",
            Object.keys(errors).length > 0 ? "gap-2" : "gap-4"
          )}
          onSubmit={handleSubmit(handleRegister)}
        >
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                variant="bordered"
                label="Fullname"
                autoComplete="off"
                isInvalid={errors.fullName !== undefined}
                errorMessage={errors.fullName?.message}
              />
            )}
          />

          <Controller
            name="userName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                variant="bordered"
                label="User Name"
                autoComplete="off"
                isInvalid={errors.userName !== undefined}
                errorMessage={errors.userName?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="email"
                variant="bordered"
                label="Email"
                autoComplete="off"
                isInvalid={errors.email !== undefined}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type={visiblePassword.password ? "text" : "password"}
                variant="bordered"
                label="Password"
                autoComplete="off"
                isInvalid={errors.password !== undefined}
                errorMessage={errors.password?.message}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => handleVisiblePassword("password")}
                  >
                    {visiblePassword.password ? (
                      <FaEye className="pointer-events-none text-xl text-default-400" />
                    ) : (
                      <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                    )}
                  </button>
                }
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type={visiblePassword.password ? "text" : "password"}
                variant="bordered"
                label="Confirm Password"
                autoComplete="off"
                isInvalid={errors.confirmPassword !== undefined}
                errorMessage={errors.confirmPassword?.message}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={() => handleVisiblePassword("password")}
                  >
                    {visiblePassword.password ? (
                      <FaEye className="pointer-events-none text-xl text-default-400" />
                    ) : (
                      <FaEyeSlash className="pointer-events-none text-xl text-default-400" />
                    )}
                  </button>
                }
              />
            )}
          />

          <Button color="danger" type="submit" size="lg">
            {isPendingRegister ? (
              <Spinner color="white" size="sm" />
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </CardBody>
    </Card>
  </div>
</div>
  );
};

export default Register;
