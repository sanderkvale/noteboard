import Feed from "@/components/Feed";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center md:p-24 p-6 bg-cover bg-[url('/Background.png')]">
      <div className="flex flex-col items-center w-full">
        <Header />
        <SearchBar />
        <Feed />
      </div>
    </main>

  );
}
