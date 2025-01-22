import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <PageTransition>
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-xl text-muted-foreground">Page not found</p>
          <Button
            className="group mt-4"
            onClick={() => navigate("/")}
            variant="outline"
          >
            <Home
              className="transition-transform group-hover:-translate-y-0.5"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Back to Home
          </Button>
        </div>
      </PageTransition>
    </div>
  );
};

export default NotFound;
