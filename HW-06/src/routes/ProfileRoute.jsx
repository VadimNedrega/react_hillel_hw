import EditProfileForm from "../components/profile/EditProfileForm";
import ChangePasswordForm from "../components/profile/ChangePasswordForm";
import { useAuthStore } from "../store/authStore";
import { User } from "lucide-react";


function ProfileRoute() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      <div className="flex items-center gap-7">
        <h1 className="text-2xl font-semibold">
          Profile
        </h1>

        <div className="w-15 h-15 bg-gray-400 text-white flex items-center justify-center shadow-sm rounded-full">
          <User size={30} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <EditProfileForm />
        <ChangePasswordForm />
      </div>

    </div>
  );
}

export default ProfileRoute;