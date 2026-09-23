import Image from "next/image";
import OrDivider from "../common/OrDivider";
import AuthBrand from "./AuthBrand";
import AuthHeader from "./AuthHeader";
import LoginServices from "./LoginServices";
import GoogleButton from "./GoogleButton";
import LoginForm from "./LoginForm";

const LoginLayout = () => {
  return (
    <main className="h-screen overflow-hidden bg-[#fffafa] p-3 sm:p-4">
      <div className="grid h-full max-h-[900] grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] md:grid-cols-[38%_62%] lg:grid-cols-[34%_66%]">
        <section className="relative hidden h-full flex-col overflow-hidden bg-[#fbecef] md:flex">
          <div className="relative h-[62%] w-full shrink-0">
            <Image
              src="/images/Login-img.png"
              alt="Gift hamper"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 38vw, 34vw"
            />
          </div>

          <div className="min-h-0 flex-1 rounded-tr-[20px] bg-[#FAEAEC] px-6 py-5 lg:px-8 lg:py-6">
            <LoginServices />
          </div>
        </section>

        <section className="flex h-full min-h-0 items-start justify-center overflow-y-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="w-full max-w-[560] py-3">
            <AuthBrand />

            <div className="mt-3">
              <AuthHeader
                title="Welcome Back"
                subtitle="Sign in to continue to your account"
              />
            </div>

            {/* Login Form */}
            <div className="mt-3">
              <LoginForm />
            </div>

            {/* Divider */}
            <div className="my-2">
              <OrDivider />
            </div>

            {/* Google Login */}
            <GoogleButton
              text="Don't have an account?"
              linkText="Create Account"
              linkHref="/register"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginLayout;
