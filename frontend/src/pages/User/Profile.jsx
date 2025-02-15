// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import Loader from "../../components/Loader";
// import { useProfileMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { Link } from "react-router-dom";

// const Profile = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmNewPassword, setConfirmNewPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const [updateProfile] = useProfileMutation();

//   useEffect(() => {
//     setUsername(userInfo.username);
//     setEmail(userInfo.email);
//   }, [userInfo]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmNewPassword) {
//       toast.error("New passwords do not match");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await updateProfile({
//         username,
//         email,
//         oldPassword,
//         newPassword,
//       }).unwrap();

//       dispatch(setCredentials(res));
//       toast.success("Profile updated successfully");
//     } catch (error) {
//       toast.error(error?.data?.error || "An error occurred while updating profile");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="container mx-auto p-4 mt-[10rem]">
//       <div className="flex justify-center align-center md:flex md:space-x-4">
//         <div className="md:w-1/3">
//           <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-white mb-2">Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 className="form-input p-4 rounded-sm w-full"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-white mb-2">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 className="form-input p-4 rounded-sm w-full"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-white mb-2">Old Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter old password"
//                 className="form-input p-4 rounded-sm w-full"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-white mb-2">New Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter new password"
//                 className="form-input p-4 rounded-sm w-full"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-white mb-2">Confirm New Password</label>
//               <input
//                 type="password"
//                 placeholder="Confirm new password"
//                 className="form-input p-4 rounded-sm w-full"
//                 value={confirmNewPassword}
//                 onChange={(e) => setConfirmNewPassword(e.target.value)}
//               />
//             </div>

//             <div className="flex justify-between">
//               <button
//                 type="submit"
//                 className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//                 disabled={loading}
//               >
//                 {loading ? "Updating..." : "Update"}
//               </button>

//               <Link
//                 to="/user-orders"
//                 className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
//               >
//                 My Orders
//               </Link>
//             </div>
//           </form>
//           {loading && <Loader />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { useProfileMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { Link } from "react-router-dom";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [updateProfile] = useProfileMutation();

  useEffect(() => {
    setUsername(userInfo.username);
    setEmail(userInfo.email);
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      toast.error("New passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await updateProfile({
        username,
        email,
        oldPassword,
        newPassword,
      }).unwrap();

      dispatch(setCredentials(res));
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error?.data?.error || "An error occurred while updating profile");
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6 mt-16 max-w-lg">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="form-input p-3 rounded-md border border-gray-300 w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              className="form-input p-3 rounded-md border border-gray-300 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">Old Password</label>
            <input
              type="password"
              placeholder="Enter old password"
              className="form-input p-3 rounded-md border border-gray-300 w-full"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-medium mb-2">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="form-input p-3 rounded-md border border-gray-300 w-full"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="form-input p-3 rounded-md border border-gray-300 w-full"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>

            <Link
              to="/user-orders"
              className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
            >
              My Orders
            </Link>
          </div>
        </form>
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Profile;

