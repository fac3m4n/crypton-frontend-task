import { useQuery } from "@tanstack/react-query";
import api from "../api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { IdCard, LogOut, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProfileData {
  email: string;
  id: string;
}

const Profile = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useQuery<ProfileData>({
    queryKey: ["profile"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const response = await api.get<ProfileData>("/profile", {
        headers: { Authorization: `${token}` },
      });
      return response.data;
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (isLoading)
    return (
      <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-md flex-col gap-6">
          <Card className="shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                <Skeleton className="h-8 w-[100px] mx-auto" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>

              <div className="pt-4">
                <Skeleton className="h-10 w-full" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  if (error) return <div>Error loading profile</div>;

  console.log(data);

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-medium min-w-20 flex items-center gap-2">
                  <Mail size={16} strokeWidth={2} aria-hidden="true" />
                  Email:
                </span>
                <span className="text-muted-foreground">{data?.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-medium min-w-20 flex items-center gap-2">
                  <IdCard size={18} strokeWidth={2} aria-hidden="true" />
                  ID:
                </span>
                <span className="text-muted-foreground">{data?.id}</span>
              </div>
            </div>
            <div className="pt-4 flex justify-center">
              <Button
                className="group"
                variant="destructive"
                onClick={handleLogout}
              >
                <LogOut
                  className="-ms-1 transition-transform group-hover:-translate-x-0.5"
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                />
                Logout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
