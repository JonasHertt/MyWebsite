import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-secondary border-b border-gray-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-txt">Jonas Herdlitschke</h1>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
