
import {
  HomeHero,
  HomeLocation,
  HomePurpose,
  HomeSchedule,
  HomeActivity,
  HomeRegister,
} from "@/components/SummerCamp";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
const HomePage = async (props: { params: Promise<{ lang: Locale }> }) => {
   const { lang } = await props.params;
    const dictionary = await getDictionary(lang);
  return (
    <>
      <div id="homeHero" className="w-full h-[944px] bg-[#FFE2B8]">
        <HomeHero lang={lang} dictionary={dictionary}/>
      </div>
      <div id="homeLocation" className="w-full bg-[#FFF4E3]">
        <HomeLocation lang={lang} dictionary={dictionary}/>
      </div>
      <div id="homePurpose" className="w-full bg-[#FFF4E3]">
        <HomePurpose lang={lang} dictionary={dictionary}/>
      </div>
      <div id="homeSchedule" className="w-full bg-[#53AC9B]">
        <HomeSchedule lang={lang} dictionary={dictionary}/>
      </div>
      <div id="homeActivity" className="w-full bg-[#FFF4E3]">
        <HomeActivity />
      </div>
      <div id="homeRegister" className="w-full bg-[#FFF4E3]">
        <HomeRegister />
      </div>
    </>
  );
};

export default HomePage;