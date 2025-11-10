import { Suspense } from 'react';
import Hero from "@/components/Signup/Bannar";
import SignupForm from '@/components/Signup/SignupForm';

import { Footer, Header } from "@/components/Layouts";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const SignupPage = async (props: { params: Promise<{ lang: Locale }> }) => {
    const { lang } = await props.params;
    const dictionary = await getDictionary(lang);
  return (
    <>
        
        <div id="SignupHero" className="w-full bg-[#fff4e33d]">
           <Suspense fallback={<div>Loading...</div>}>
            <Hero lang={lang} dictionary={dictionary}/>
           </Suspense>
        </div>
        {/* <div className="min-h-screen bg-[#fff4e33d]">
          <Suspense fallback={<div>Loading...</div>}>
            <SignupForm dictionary={dictionary} lang={lang} />
          </Suspense>
        </div> */}
    </>
    );
};

export default SignupPage;