import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProfile } from "../../hooks/useProfile";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ROUTES } from "../../router/routesPaths"
import Loader from "../ui/Loader"

const profileSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone is too short"),
});

function EditProfileForm() {
    const navigate = useNavigate();

    const user = useAuthStore((state) => state.user);
    const updateUser = useAuthStore((state) => state.updateUser);

    const { data: profile, isLoading } = useProfile(user?.id);
    const updateProfile = useUpdateProfile();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(profileSchema),
        values: profile,
    });

    const onSubmit = (data) => {
        if (!user?.id) return;

        updateProfile.mutate(
            { id: user.id, data },
            {
                onSuccess: (updatedUser) => {
                    updateUser(updatedUser);
                    reset(updatedUser);

                    toast.success("Profile updated successfully");

                    navigate(ROUTES.dashboard.map);
                }
            }
        );
    };

    if (isLoading) return <Loader />;
    if (!user?.id) return <p>User not found</p>;

    return (
        <div className="bg-white border rounded-xl shadow-sm p-6 space-y-4">
            <h2 className="text-lg font-semibold">Edit Profile</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div>
                    <input
                        {...register("name")}
                        placeholder="Name"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <input
                        {...register("email")}
                        placeholder="Email"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <input
                        {...register("phone")}
                        placeholder="Phone"
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    {isSubmitting ? "Saving..." : "Save"}
                </button>
            </form>
        </div>
    );
}

export default EditProfileForm;