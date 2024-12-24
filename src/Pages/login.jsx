import LoginPage from "../assets/backround.png";
import LoginCoder from "../assets/logo_coder.png";
import LoginCoder2 from "../assets/layersLogis.png";
import LoginIlustrasi from "../assets/ilustrasi.png";
import { Button, Checkbox, Flex } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useNavigate } from "react-router";
import { Input } from "../Components/Form";
import { useEffect, useState } from "react";
import { GuestController, LoginController } from "../Controller/User";
export default function login() {
  let navigate = useNavigate();
  let [Respond, setRespond] = useState({ status: null, error: null });
  let [Values, setValues] = useState({
    email: "",
    password: "",
    remember: false,
  });

  let [Psw, SetPsw] = useState(false);

  function handleChange(key, value) {
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  function Submit(e) {
    let data = LoginController(Values);
    if (data.status == true) {
      setValues({
        email: "",
        password: "",
      });
      navigate("/");
    }
    setRespond(data);
    e.preventDefault();
  }

  useEffect(() => {
    GuestController(navigate);
  }, []);

  return (
    <>
      <img
        src={LoginPage}
        className="w-full h-full fixed top-0 left-0 max-lg:hidden object-cover object-bottom blur-sm"
        alt=""
      />
      <div className="w-full h-screen flex justify-center items-center z-10 relative">
        <div className="flex flex-col justify-center items-center p-8 bg-gray-800 rounded-lg shadow-lg to-transparent">
          <img src={LoginCoder2} alt="Logo" className="h-14 mb-8" />
          <p className="text-white font-bold text-3xl text-center">
            Welcome, Sales Direct
            <span className="font-medium ms-2"></span>
          </p>
          <form onSubmit={Submit} className="w-[400px] mt-5">
            <Input
              error={Respond.error?.email?.[0] ?? ""}
              className={"my-6"}
              value={Values.email}
              onInput={(e) => handleChange("email", e.target.value)}
              icon={"solar:letter-broken"}
              placeholder={"Email"}
            />
            <Input
              error={Respond.error?.password?.[0] ?? ""}
              className={"my-6"}
              value={Values.password}
              onInput={(e) => handleChange("password", e.target.value)}
              onClick={() => SetPsw((d) => !d)}
              typeInput={Psw ? "text" : "password"}
              icon={Psw ? "solar:eye-broken" : "solar:eye-closed-broken"}
              placeholder={"Password"}
              active={true}
            />
            <Flex justify="space-between" align="center" className="mt-10">
              <Checkbox
                checked={Values.remember}
                onChange={(e) => handleChange("remember", e.target.checked)}
                className="text-white text-[15px]"
              >
                Remember Me
              </Checkbox>
              <Link to={"/"} className="text-white text-[14px]">
                Forgot Password?
              </Link>
            </Flex>
            <button className="w-full bg-white text-primary py-3 px-4 rounded-full mx-auto mt-10 flex justify-center items-center gap-1">
              <span className="text-lg font-semibold">Login</span>
              <Icon
                icon={"material-symbols:arrow-right-alt-rounded"}
                className="text-2xl"
              />
            </button>
            <p className="text-center mt-6 text-white text-[15px]">
              don’t have account?{" "}
              <Link to={"/register"} className="font-semibold">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
