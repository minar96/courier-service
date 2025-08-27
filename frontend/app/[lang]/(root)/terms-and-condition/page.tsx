
import TermsAndConditionHero from "@/components/TermsAndCondition/Hero";
import TermsAndConditionBody from "@/components/TermsAndCondition/Body";
const TermsAndConditionPage = () => {
  return (
    <>
      <div id="termsAndConditionHero" className="w-full bg-[#FFE2B8]">
        <TermsAndConditionHero />
      </div>
      <div id="termsAndConditionBody" className="w-full bg-[#F3F3F3]">
        <TermsAndConditionBody />
      </div>
      
    </>
  );
};

export default TermsAndConditionPage;
