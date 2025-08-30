import Hero from "@/components/About/Bannar";
import WelcomeKiddoz from "@/components/About/WelcomeKiddoz";
import MissionVision from "@/components/About/MissionVision";
import Purpose from "@/components/About/Purpose";
import Team from "@/components/About/Team";
import { Footer, Header } from "@/components/Layouts";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const AboutPage = async (props: { params: Promise<{ lang: Locale }> }) => {
    const { lang } = await props.params;
    const dictionary = await getDictionary(lang);
  return (
    <>
        
        <div id="aboutDetailsHero" className="w-full bg-[#FFE2B8]">
            <Hero lang={lang} dictionary={dictionary}/>
        </div>
        <div id="aboutDetailsWelcome" className="w-full bg-[#FFF4E3]">
            <WelcomeKiddoz lang={lang} dictionary={dictionary}/>
        </div>
        <div id="aboutDetailsMissionVision" className="w-full bg-[#FFF4E3]">
            <MissionVision lang={lang} dictionary={dictionary}/>
        </div>
        {/* <div id="aboutDetailsPurpose" className="w-full bg-[#FFF4E3]">
            <Purpose />
        </div> */}
        {/* <div id="aboutDetailsTeam" className="w-full bg-[#FFF4E3]">
            <Team />
        </div> */}
    </>
    );
};

export default AboutPage;