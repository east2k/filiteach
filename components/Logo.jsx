import Image from "next/image";

const Logo = () => (
  <div className="flex flex-row gap-2 items-center font-bold text-4xl md:text-2xl">
    <Image
      className="h-full"
      src="/assets/images/filiteach-logo-green.png"
      alt="FiliTeach logo"
      width={32}
      height={40}
    />
    FiliTeach
  </div>
);

export default Logo;
