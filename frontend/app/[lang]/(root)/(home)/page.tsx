
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import HomeHero from "@/components/Home/HomeHero";
import Services from "@/components/Home/Services";
import ChildsProgress from "@/components/Home/ChildsProgress";
import CourseCategory from "@/components/Home/CourseCategory";
import CapturingMoment from "@/components/Home/CapturingMoment";
import KiddozWork from "@/components/Home/KiddozWork";
import Event from "@/components/Home/Event";
import Testimonial from "@/components/Home/Testimonial";
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
      <div id="homeChildsProgress" className="w-full bg-[#FFF]">
        <ChildsProgress lang={lang} dictionary={dictionary} />
      </div>
      <div id="homeCourseCategory" className="w-full bg-[#D8F6FF]">
        <CourseCategory lang={lang} dictionary={dictionary}/>
      </div>
      <div id="homeCapturingMoment" className="w-full bg-[#FFF]">
        <CapturingMoment lang={lang} dictionary={dictionary} />
      </div>
      <div id="homeKiddozWork" className="w-full bg-[#FFF]">
        <KiddozWork lang={lang} dictionary={dictionary} />
      </div>
      <div id="homeEvent" className="w-full bg-[#FFF]">
        <Event lang={lang} dictionary={dictionary} />
      </div>
      {/* <div id="homeTestimonial" className="w-full bg-[#51B59F]">
        <Testimonial />
      </div> */}
      <div
        id="homeFaq"
        className="w-full bg-[#FFF4E3] mt-[44px] 2xl:mt-[120px] xl:mt-[120px] lg:mt-[120px] md:mt-[120px]"
      >
        <Faq lang={lang} dictionary={dictionary} />
      </div>
    </>
  );
};

export default HomePage;
