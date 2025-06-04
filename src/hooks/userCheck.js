import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { userProfile } from "../services/publicService";

export const useUserCheck = () => {
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      if (username && !["blog", "about", "contact"].includes(username)) {
        const result = await userProfile(username);
        if (result.isUserNotFound) {
          navigate("/404", { replace: true });
        }
      } else if (["about", "contact"].includes(username)) {
        navigate("/404", { replace: true });
      }
    };

    checkUser();
  }, [username, navigate]);
};
