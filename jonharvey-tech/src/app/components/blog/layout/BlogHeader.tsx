'use client'
import { useRouter } from "next/navigation";

const BlogHeader = () => {

const router = useRouter();
   // TODO: add logic to disable back or next if no post exists in that direction
  return (
    <div className="h-fit p-0 mb-16 mt-10">
        <nav className="w-full h-10 text-white flex flex-row justify-between">
                <a onClick={() => router.push('/blog')} className="h-fit no-underline transition cursor-pointer px-4 duration-500 hover:bg-white hover:text-black hover:opacity-90 border border-white w-fit text-center rounded-3xl py-2">back to blogs</a>
                <img src={"/images/jonharvey.PNG"} alt={"photo of Jon Harvey"} className="w-20 h-20 rounded-full mx-2 mt-0" />
        </nav>
    </div>
  );
};

export default BlogHeader;