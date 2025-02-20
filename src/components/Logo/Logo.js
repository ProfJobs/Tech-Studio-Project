import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        alt="Logo"
        width={120}
        height={120}
        src="/images/logo-white.webp"
      />
    </div>
  );
};

export default Logo;
