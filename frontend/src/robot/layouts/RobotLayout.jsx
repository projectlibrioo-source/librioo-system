import logolib31 from "../../assets/logolib3-1.png";

export default function RobotLayout({ children }) {
  return (
    <main className="bg-[linear-gradient(180deg,#2c3e50_0%,#4a6278_100%)] w-full h-screen relative">

      {/* Header */}
      <header className="relative w-full mt-4 h-[120px]">
        <div className="absolute top-[10px] left-[100px] right-[100px] h-[100px] bg-[#d9d9d959] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />

        <h2 className="absolute top-[50px] left-[145px] [-webkit-text-fill-color:white] [font-family:'Aldrich-Regular',Helvetica] font-normal text-white text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
          Smart Library Assistant
        </h2>

        <img
          className="absolute top-[5px] left-[130px] w-[191px] h-[72px] aspect-[2.86]"
          alt="Smart Library Assistant"
          src={logolib31}
        />
      </header>

      {/* Page content */}
      <section className="top-[143px] left-[194px] right-[150px]" relative>
        {children}
      </section>

    </main>
  );
}
