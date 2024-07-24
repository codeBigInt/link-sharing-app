import Auth from "./component/Auth/Auth";

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen p-4 justify-center items-center md:bg-[#FAFAFA]">
      <Auth />
    </main>
  );
}
