import Image from "next/image";
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="h-[7vh]  flex justify-between items-center bg-white text-gray-100 sticky top-0">
      <h1 className="m-3 mx-20 font-bold text-2xl flex items-center">
        <Image
          src="/Diet.jpg"
          height={40}
          width={40}
          className="backdrop-invert rounded-full scale-75"
        />{" "}
        <span className="text-green-500 italic">Meal</span>{" "}
        <span className="text-black">Master</span>
      </h1>

      <ul className="flex gap-6 items-center mx-8 m-3 p-2">
      <Link href="/login">
        <li className="cursor-pointer  border text-center border-blue-800 bg-white text-blue-800 font-bold text-sm px-9 py-1 rounded-md hover:bg-gray-100">
          Log in
        </li>
      </Link>
        <Link href="/sign-up">
          <li className="cursor-pointer text-center bg-blue-700 font-bold text-sm px-9 py-1 rounded-md hover:bg-blue-800">
            Sign up
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
