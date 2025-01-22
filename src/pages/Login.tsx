import LoginForm from "@/components/LoginForm";
const Login = () => {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
