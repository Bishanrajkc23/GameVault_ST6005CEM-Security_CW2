// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader";
// import { useRegisterMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [username, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [register, { isLoading }] = useRegisterMutation();

//   const { userInfo } = useSelector((state) => state.auth);

//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get("redirect") || "/";

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);

//   const submitHandler = async (e) => {
//     e.preventDefault();
  
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//     } else {
//       try {
//         const res = await register({ username, email, password }).unwrap();
//         dispatch(setCredentials({ ...res }));
//         navigate(redirect);
//         toast.success("User successfully registered");
//       } catch (err) {
//         if (err?.data?.error) {
//           toast.error(err.data.error);
//         } else {
//           // For other errors, display a generic error message
//           toast.error("An error occurred while processing your request.");
//         }
//       }
//     }
//   };
  

//   return (
//     <section className="pl-[10rem] flex flex-wrap">
//       <div className="mr-[4rem] mt-[5rem]">
//         <h1 className="text-2xl font-semibold mb-4">Register</h1>

//         <form onSubmit={submitHandler} className="container w-[43rem]">
//           <div className="my-[2rem]">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-white"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter name"
//               value={username}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="my-[2rem]">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-white"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="my-[2rem]">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-white"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="my-[2rem]">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium text-white"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>

//           <button
//             disabled={isLoading}
//             type="submit"
//             className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
//           >
//             {isLoading ? "Registering..." : "Register"}
//           </button>

//           {isLoading && <Loader />}
//         </form>

//         <div className="mt-4">
//           <p className="text-white">
//             Already have an account?{" "}
//             <Link
//               to={redirect ? `/login?redirect=${redirect}` : "/login"}
//               className="text-red-500 hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//       <img
//         src="https://i.imgur.com/BIsOIDE.png"
//         alt=""
//         className="h-[57rem] w-[46%] xl:block md:hidden sm:hidden rounded-lg"
//       />
//     </section>
//   );
// };

// export default Register;

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useRegisterMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success("User successfully registered");
      } catch (err) {
        if (err?.data?.error) {
          toast.error(err.data.error);
        } else {
          toast.error("An error occurred while processing your request.");
        }
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray text-white">
      {/* Image Section */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://imgur.com/qFgGBnO.png"
          alt="Register"
          className="h-full w-full object-cover rounded-l-lg"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-black-900">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 p-3 border border-gray-700 rounded-lg w-full bg-gray-800 text-white"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-3 border border-gray-700 rounded-lg w-full bg-gray-800 text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-medium">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 p-3 border border-gray-700 rounded-lg w-full bg-gray-800 text-white"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-lg font-medium">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-3 border border-gray-700 rounded-lg w-full bg-gray-800 text-white"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 bg-red-700 text-white font-semibold rounded-lg shadow-md hover:bg-red-800 disabled:opacity-50"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          {isLoading && <Loader />}
        </form>

        <div className="mt-6">
          <p>Already have an account? <Link to={redirect ? `/login?redirect=${redirect}` : "/login"} className="text-red-500 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
