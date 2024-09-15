import Banner from "@/app/componnet/banner/banner";
import Card from "@/app/componnet/card/card";
import HelpSection from "@/app/componnet/helpSection/helpSection";
import expertsImg from "@/app/asset/images/client.svg";

function page() {
  return (
    <main className=" bg-white min-h-80 ">
      <section className=" bg-stone-500 pt-20 pb-20 ">
        <Banner heading={"Our Expert"} />
      </section>
      <HelpSection />

      <section className=" bg-sky-700 p-8 ">
        <Banner heading={"Our Expert"} />
      </section>
    </main>
  );
}

export default page;
