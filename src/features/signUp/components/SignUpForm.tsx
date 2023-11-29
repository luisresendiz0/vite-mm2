import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../../../store/store";

const SignUpForm = () => {

  const signIn = useStore(store => store.signIn);
  const navigate = useNavigate();

  const handleSignUp = () => {
    signIn();
    navigate('/app', { replace: true });
  }

  return (
    <div className="">
      <div className="flex flex-col w-96 border bg-gray-50 p-8 rounded">
        <input type="email" placeholder="Email" className="border p-2 mb-2 rounded" />
        <input type="password" name="" id="" placeholder="Password" className="border p-2 mb-2 rounded" />
        <button onClick={handleSignUp} className="bg-blue-500 px-8 py-3 mb-2 text-sm text-white rounded font-bold uppercase">Register</button>
        <Link to="/signin">
          <span className="text-blue-500 underline">Already have an account?</span>
        </Link>
      </div>
    </div>
  )
};

export default SignUpForm;