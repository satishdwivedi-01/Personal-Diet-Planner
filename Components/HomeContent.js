import Image from "next/image";
import Link from "next/link"
const HomeContent = () => {
  return (
    <div className="p-3 h-[83vh]  bg-slate-50 w-full  text-center ">
      <div className="h-[50%] relative bg-gray-500">
        <Image src="/boyImage.jpg" layout="fill" objectFit="cover" />
        <div className="flex flex-col items-center gap-5 absolute left-[35%] top-[25%] text-white">
          <h1 className="text-4xl font-black">A Smart Diet For You</h1>
          <p className="text-lg font-semibold ">
            Personalized nutrition plans to fit your lifestyle and goals.
          </p>
          <Link href="/sign-up">
          <button className="bg-blue-700 w-[125%] p-1 rounded-md hover:bg-blue-800">
            Get Started
          </button>
          </Link>
        </div>
      </div>

      <div className="h-[25%] bg-white my-[5%] flex flex-col items-center justify-evenly">
        <h2 className="text-3xl font-black text-blue-700">Get Started Now</h2>
        <p >
          Create a personalized meal plan to achieve your health goals. Start
          today for a healthier tomorrow!
        </p>
        <Link href="/sign-up">
        <button className="bg-blue-700 w-[115%] p-1 rounded-md text-white hover:bg-blue-800">
          Create Meal Plan
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeContent;
