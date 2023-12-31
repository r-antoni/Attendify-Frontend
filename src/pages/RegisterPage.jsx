import {Link} from "react-router-dom";
import Button from "../components/Button";
import InputText from "../components/InputText";
import LoginText from "../components/LoginText";

const Register = () => {
  return (
    <div className="flex justify-between">
      <LoginText />
      <form className="flex flex-col gap-10 justify-center min-h-screen px-20">
        <div className="flex flex-col gap-6">
          <InputText name="username" label="Username" type="text" />
          <InputText name="email" label="Email" type="email" />
          <InputText name="password" label="Password" type="password" />
          <InputText name="repeatPassword" label="Repeat Password" type="password" />
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center text-sm gap-2">
            <input className="rounded" type="checkbox" />{" "}
            <p>
              I agree with the{" "}
              <span className="text-secondary">
                <Link>terms and conditions</Link>
              </span>
            </p>
          </div>
          <Button type="submit">Sign up</Button>
          <p className="text-sm">
            Have an account ?{" "}
            <span>
              <Link className="text-secondary" to="/">
                Login Here
              </Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
