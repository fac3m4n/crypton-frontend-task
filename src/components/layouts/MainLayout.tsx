import { Link } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";
import { GalleryVerticalEnd } from "lucide-react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-background relative">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between p-4 border-b bg-background">
        <Link to="/">
          <div className="flex items-center gap-2 self-center font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            <div>Crypton</div>
          </div>
        </Link>
        <ThemeToggle />
      </div>

      {/* Page Content */}
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default MainLayout;
