import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="relative w-[100vw] h-[100vh] bg-black ">
      <Image
        src="/Login_image.jpg"
        alt="login image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-[15%] left-[33%]  h-[60%] w-[35%] bg-gray-50 opacity-70">
        <h1 className="font-bold text-3xl flex items-center justify-center my-[3%]">
          <Image
            src="/Diet.jpg"
            height={45}
            width={45}
            className="backdrop-invert rounded-full scale-75"
          />{" "}
          <span className="text-green-500 italic">Meal</span>{" "}
          <span className="text-black">Master</span>
        </h1>
        <div className="flex flex-col items-start p-4 h-[70%] justify-evenly">
          <h2 className="text-blue-700 text-lg font-bold">Sign Up for <span className="text-green-500 italic">Meal</span><span className="text-black">Master</span></h2>
          <input type="text"  placeholder="Full Name" className="p-1 pl-2 placeholder:text-sm rounded-md w-[70%] placeholder:text-gray-700 placeholder:font-semibold bg-gray-300 focus:border-blue-200 focus:outline-none focus:border-2 font-semibold text-gray-800"/>
          <input type="email" placeholder="Email"     className="p-1 pl-2 placeholder:text-sm rounded-md w-[70%] placeholder:text-gray-700 placeholder:font-semibold bg-gray-300 focus:border-blue-200 focus:outline-none focus:border-2 font-semibold text-gray-800"/>
          <button className="text-center bg-blue-700 font-semibold text-sm px-9 py-1 rounded-md text-white hover:bg-blue-800">Sign up</button>
          <Link href="/login">
          <p className="text-blue-600 text-sm">already have an account? <span className="cursor-pointer underline underline-offset-2 font-medium">Log in</span></p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
