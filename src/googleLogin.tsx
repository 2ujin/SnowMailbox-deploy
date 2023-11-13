import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import ApiService from "./services/apiService";
import { IUsers } from "./types/Users";
const GoogleLoginButton = () => {
  const clientId =
    "705147682536-svudhbtvg80n9d11nbnt6pirgkfrtjq1.apps.googleusercontent.com";

  const navigate = useNavigate();

  const googleLoginSuccess = (res: any) => {
    const decoded: IUsers = jwtDecode(res.credential);
    const { name, email, locale, sub, nickname } = decoded;
    ApiService.login({ name, email, locale, sub, nickname })
      .then(async (response: any) => {
        const token = response.data.token;
        if (token) {
          localStorage.setItem("token", token);
          const user = await ApiService.getUser();
          if (user) {
            localStorage.setItem("user", JSON.stringify(user.data));
          }
          const is_mailbox = await ApiService.getMailbox();
          if (is_mailbox.data) {
            navigate(`/${is_mailbox.data._id}`);
          } else {
            navigate("/mailbox");
          }

        }
      })
      .catch((e: Error) => {
        throw e;
      });
  };

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={googleLoginSuccess}
          onError={() => alert("Disable Login")}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
