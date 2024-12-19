import { LoginForm } from "@/components/auth/LoginForm";
import { AuthContent } from "@/components/auth/AuthContent";
import { NavBackButton } from "@/components/auth/NavBackButton";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 relative">
        <NavBackButton />
        <div className="h-full overflow-y-auto pt-16">
          <div className="flex items-center justify-center">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 fixed right-0 h-screen">
        <AuthContent
          title="Bienvenue sur DomHyn!"
          subtitle="Connectez-vous pour accéder à votre espace"
          features={[
            {
              icon: <div className="w-6 h-6" />,
              text: "Gérez vos propriétés facilement"
            },
            {
              icon: <div className="w-6 h-6" />,
              text: "Accédez à vos documents"
            },
            {
              icon: <div className="w-6 h-6" />,
              text: "Support client prioritaire"
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Login;