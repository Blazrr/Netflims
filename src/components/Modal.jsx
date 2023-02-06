import { createClient } from "@supabase/supabase-js";
import { NavLink } from "react-router-dom";

const Modal=({ setSessionStatus, user })=>{

console.log(user)
  const supabase = createClient(
    import.meta.env.VITE_PROJECT_URL,
    import.meta.env.VITE_ANON_API_KEY
  );

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    setSessionStatus("SIGNED_OUT");
  }
  return (
    <div className="container-modal">
      <div className="modal">
        <NavLink to="/profile">Profile</NavLink>
        <h2 className="container-modal-title">{user.username}</h2>
        <button onClick={signOutUser}>Logout</button>
      </div>
    </div>
  );
}

export default Modal;
