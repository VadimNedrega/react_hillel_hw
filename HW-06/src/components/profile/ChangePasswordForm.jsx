import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useAuthStore } from "../../store/authStore";
import { useChangePassword } from "../../hooks/useChangePassword";
import { changePasswordSchema } from "../../schemas/changePasswordSchemas";

function ChangePasswordForm() {
  const [open, setOpen] = useState(false);

  const user = useAuthStore((s) => s.user);
  const changePassword = useChangePassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    if (!user?.id) return;

    changePassword.mutate(
      {
        id: user.id,
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      },
      {
        onSuccess: () => {
          toast.success("Password changed successfully");
          reset();
          setOpen(false);
        },
        onError: (err) => {
          toast.error(
            err?.response?.data?.message ||
              "Current password is incorrect"
          );
        },
      }
    );
  };

  return (
    <div className="bg-white border rounded-xl shadow-sm p-6 space-y-4">

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Security</h2>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-sm px-3 py-1 rounded-lg border hover:bg-gray-50 transition"
        >
          {open ? "Cancel" : "Change password"}
        </button>
      </div>

      {/* FORM */}
      {open && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <input
              type="password"
              placeholder="Current Password"
              {...register("currentPassword")}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.currentPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="New Password"
              {...register("newPassword")}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={changePassword.isPending}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
          >
            {changePassword.isPending
              ? "Saving..."
              : "Update password"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ChangePasswordForm;