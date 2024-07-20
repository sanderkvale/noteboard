import Feed from "@/components/Feed";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center p-24 bg-cover bg-[url('/Background.png')]">
      <div className="flex flex-col items-center w-full gap-5">
        <Header />
        <SearchBar />
        <Feed />
      </div>
    </main>

  );
}
