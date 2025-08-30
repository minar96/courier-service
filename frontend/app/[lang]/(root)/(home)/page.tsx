
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import HomeHero from "@/components/Home/HomeHero";
import Services from "@/components/Home/Services";
import HowItWorks from "@/components/Home/HowItWorks";
import Coverage from "@/components/Home/Coverage";
import Testimonial from "@/components/Home/Testimonial";
import StartShipping from "@/components/Home/StartShipping";
import Event from "@/components/Home/Event"
import Faq from "@/components/Home/Faq";



const HomePage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  return (
    <>
      <div id="homeHero" className="w-full bg-gradient-to-t from-[#fde7d6] to-white">
        <HomeHero lang={lang} dictionary={dictionary} />
      </div>
      <div id="homeServices" className="w-full bg-[#FFF]">
        <Services lang={lang} dictionary={dictionary}/>
      </div>
      <div id="homeHowItWorks" className="w-full bg-[#0f172a]">
        <HowItWorks lang={lang} dictionary={dictionary} />
      </div>
      <div id="homeCoverage" className="w-full bg-[#FFF]">
        <Coverage lang={lang} dictionary={dictionary}/>
      </div>
      <div id="homeTestimonial" className="w-full bg-[#FFF]">
        <Testimonial lang={lang} dictionary={dictionary} />
      </div>
      <div id="homeStartShipping" className="w-full bg-[#0e1b2a]">
        <StartShipping lang={lang} dictionary={dictionary} />
      </div>
      
    </>
  );
};

export default HomePage;
