import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans">
      <main className="min-h-screen w-full py-16 px-8">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="w-1/2 pr-4">
            <h1></h1>
          </div>
          
          <div className="bg-gray-100 text-txt text-right justify-self-end p-2 rounded-sm m-2">
            <div>Finding Solutions</div>
            <div>for any problems</div>
          </div>
        </div>

        <div className="pl-4 bg-gray-100 mb-4">
          <p className="text-gray-600 text-xl font-semibold">Let's take the next step together!</p>
        </div>

        <div className="pl-4 bg-gray-100 rounded-sm">
          <h1 className="text-3xl font-bold text-txt">Who is behind this?</h1>
          <p className="text-gray-600 text-xl font-semibold">I'm Jonas Herdlitschke, a software engineer with a passion for building web applications. I'm currently working as a software engineer at <a href="https://www.google.com" className="text-primary">Google</a>.</p>
        </div>

      </main>
    </div>
  );
}
