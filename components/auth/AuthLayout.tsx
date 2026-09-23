import Image from "next/image";
import OrDivider from "../common/OrDivider";
import AuthBrand from "./AuthBrand";
import AuthHeader from "./AuthHeader";
import AuthServices from "./AuthServices";
import GoogleButton from "./GoogleButton";
import RegisterForm from "./RegisterForm";

const AuthLayout = () => {
  return (
    <main className="h-screen overflow-hidden bg-[#fffafa] p-3 sm:p-4">
      <div className="h-full max-h-[900] overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] grid grid-cols-1 md:grid-cols-[38%_62%] lg:grid-cols-[34%_66%]">
        <section className="hidden md:flex h-full flex-col relative overflow-hidden bg-[#fbecef]">
          <div className="relative h-[62%] w-full shrink-0">
            <Image
              src="/images/RegisterF-img.png"
              alt="Gift hamper"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 38vw, 34vw"
            />
          </div>

          <div className="flex-1 min-h-0 bg-[#FAEAEC] rounded-tr-[20px] px-6 lg:px-8 py-5 lg:py-6">
            <AuthServices />
          </div>
        </section>

        <section className="flex h-full min-h-0 items-start justify-center px-5 sm:px-8 lg:px-12 xl:px-16 overflow-y-auto">
          <div className="w-full max-w-[560] py-3">
            <AuthBrand />
            <div className="mt-3">
              <AuthHeader
                title="Create Account"
                subtitle="Join us and start gifting happiness"
              />
            </div>

            {/* Register Form */}
            <div className="mt-3">
              <RegisterForm />
            </div>

            {/* Divider */}
            <div className="my-2">
              <OrDivider />
            </div>

            {/* Google */}
            <GoogleButton
              text="Already have an account?"
              linkText="Login"
              linkHref="/login"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthLayout;
