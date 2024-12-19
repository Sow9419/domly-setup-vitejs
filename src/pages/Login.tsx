import { LoginForm } from "@/components/auth/LoginForm";
import { AuthRightSection } from "@/components/auth/AuthRightSection";
import { NavBackButton } from "@/components/auth/NavBackButton";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex flex-col relative">
        <NavBackButton />
        <div className="flex-1 overflow-y-auto pt-16">
          <div className="flex items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 fixed right-0 h-screen">
        <AuthRightSection />
      </div>
    </div>
  );
};

export default Login;