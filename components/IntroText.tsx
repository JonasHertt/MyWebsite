import Image from "next/image";

export default function IntroText() {
  return (
    <div className="flex items-center justify-between w-full gap-[clamp(1rem, 2vw, 3rem)]">
      <div className="space-y-4 text-xl md:text-2xl text-txt flex-1" style={{ maxWidth: 'clamp(45vw, 50vw, 55vw)' }}>
        <p className="font-semibold">
          Interdisciplinary Engineer • Problem Solver • Founder
        </p>
        <p className="text-lg md:text-xl opacity-90">
          Building innovative products with passion and precision. Here is some text about me. Idk what to write here. But I need some placeholder to see what it looks like on the screen.
        </p>
        <p className="text-base md:text-lg opacity-80">
          Transforming complex challenges into elegant solutions. Solving problems with a multidisciplinary approach. Creating innovative products.
        </p>
      </div>
      <div className="flex-shrink-0" style={{ marginRight: 'clamp(2rem, 4vw, 6rem)' }}>
        <Image 
          src="/profile_image/DSC03115.JPG" 
          alt="Profile Picture" 
          width={500}
          height={750}
          className="rounded-lg"
          style={{ 
            width: 'clamp(150px, 15vw, 300px)',
            height: 'auto',
          }} 
        />
      </div>
    </div>
  );
}
