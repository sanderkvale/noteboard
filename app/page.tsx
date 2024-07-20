import Feed from "@/components/Feed";
import SearchBar from "@/components/SearchBar";
import { FaPlusCircle } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center p-24 bg-[url('/Background.png')] bg-cover">
      <div className="flex flex-col items-center w-full max-w-screen-md gap-5">
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-semibold text-[#4b4b4b]">Notes</h1>
          <FaPlusCircle size={50} color={"#61eb6e"} />
        </div>
        <SearchBar />
        <Feed />
      </div>
    </main>
  );
}
