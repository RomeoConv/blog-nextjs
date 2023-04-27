import Image from "next/image";

export default function Navbar() {
  return (
    <main className="nav_main">
      <section>
        <Image src={"/transp_logo.png"} height={60} width={90} alt="nav_logo" />
      </section>
    </main>
  );
}
