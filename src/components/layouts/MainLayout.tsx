import { Link } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <header className="flex justify-between p-4 border-b">
        <Link to="/">
          <h1>My App</h1>
        </Link>
        <ThemeToggle />
      </header>

      {/* Page Content */}
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
