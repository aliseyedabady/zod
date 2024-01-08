import loginVector from "../../assets/images/login.svg";
import Button from "../form/button";
import Input from "../form/input";
// import LightDarkToggle from "../lightDarkToggle";
const Login = () => {
  return (
    <div className="min-h-screen flex relative items-center">
      <div className="w-full absolute top-0 right-0 flex justify-between items-center lg:px-16 px-3 h-[72px]">
        <h4 className="font-bold text-[2rem] text-[#283252]">پنل علی</h4>
        {/* <LightDarkToggle /> */}
      </div>
      <div className="lg:px-[10rem] p-[3rem] grid grid-cols-2 flex-1">
        <div className="lg:col-span-1  max-w-[420px] col-span-2">
          <h1 className="font-bold mb-2 text-[2.5rem] text-[#283252]">ورود</h1>
          <p className="text-[#747990] text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </p>
          <div className="bg-white rounded-xl p-10 mt-6">
            <Input
              label="نام کاربری"
              className="mb-3"
              placeholder="نام کاربری را وارد کنید"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="feather:mail"
                  className="iconify iconify--feather"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2"></path>
                    <path d="m22 6l-10 7L2 6"></path>
                  </g>
                </svg>
              }
            />
            <Input
              label="رمز عبور"
              placeholder="رمز عبور را وارد کنید"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  data-icon="feather:lock"
                  className="iconify iconify--feather"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </g>
                </svg>
              }
            />
            <Button className="mt-4" text="ورود" />
          </div>
        </div>
        <div className="col-span-1 lg:block hidden">
          <img src={loginVector} className="max-w-[420px] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Login;
