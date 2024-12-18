import { LoginForm } from "@/components/auth/LoginForm";
import { AuthRightSection } from "@/components/auth/AuthRightSection";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <LoginForm />
      </div>
      <AuthRightSection />
    </div>
  );
};

export default Login;