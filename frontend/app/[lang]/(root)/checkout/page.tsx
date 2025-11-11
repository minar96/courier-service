import Hero from "@/components/Order/Checkout";

import { Footer, Header } from "@/components/Layouts";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const CheckoutPage = async (props: { params: Promise<{ lang: Locale }> }) => {
    const { lang } = await props.params;
    const dictionary = await getDictionary(lang);
  return (
    <>
        
        <div id="CheckoutHero" className="w-full bg-[#fff4e33d]">
            <Hero lang={lang} dictionary={dictionary}/>
        </div>
       
    </>
    );
};

export default CheckoutPage;