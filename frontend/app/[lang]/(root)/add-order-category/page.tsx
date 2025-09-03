import Hero from "@/components/Order/Category/Bannar";

import { Footer, Header } from "@/components/Layouts";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const LoginPage = async (props: { params: Promise<{ lang: Locale }> }) => {
    const { lang } = await props.params;
    const dictionary = await getDictionary(lang);
  return (
    <>
        
        <div id="LoginHero" className="w-full bg-[#fff4e33d]">
            <Hero lang={lang} dictionary={dictionary}/>
        </div>
       
    </>
    );
};

export default LoginPage;