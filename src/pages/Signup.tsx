import { SignupForm } from "@/components/auth/SignupForm";
import { AuthRightSection } from "@/components/auth/AuthRightSection";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <SignupForm />
      </div>
      <AuthRightSection />
    </div>
  );
};

export default Signup;