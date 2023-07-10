"use client";
import { useEffect } from "react";
import { useGlobalContext } from "../context/store";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const { user, setUser } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    // Getting the name of the logged in user
    let loggedInUser = Cookies.get("loggedInUser");
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogoutAction = () => {
    // Removing the logged in user from cookies and redirecting to login
    Cookies.remove("loggedInUser");
    setUser('')
    router.push("/");
  };

  return (
    <div>
      <div>Welcome {user}</div>
      <button onClick={handleLogoutAction}>Logout</button>
    </div>
  );
};

export default Page;
