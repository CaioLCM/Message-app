import { useState, useEffect } from "react";
import "./LogInStyle.css";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "../../firebase.ts";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData){
          navigate(`/menu/${userData?.displayName}`);
      }

    });
  }, []);
  const [loading, setLoading] = useState(false);
  //auth.currentUser?.displayName
  const handleGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("Usuário logado com Google: ", result.user);
    } catch (Err) {
      console.error("Erro no login com Google:", Err);
    } finally {
      setLoading(false)
    }
  };
  return (
    <>
      <h1 className="LogInMenu">Log in</h1>
      <div className="LogInMenu" id="items-login">
        <button
          type="button"
          onClick={handleGoogle}
          disabled={loading}
          className="btn btn-primary LogInMenu"
        >
          Log in with Google
        </button>
      </div>
    </>
  );
}

export default LogIn;
