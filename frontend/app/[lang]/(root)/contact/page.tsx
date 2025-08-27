
import ContactHero from "@/components/Contact/Hero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactLocation from "@/components/Contact/Location";
import StuActivity from "@/components/Contact/StuActivity";
const ContactPage = () => {
  return (
    <>
      <div id="contactHero" className="w-full bg-[#FFE2B8]">
        <ContactHero />
      </div>
      <div id="contactForm" className="w-full bg-[#FFF4E3]">
        <ContactForm />
      </div>
      <div id="contactLocation" className="w-full bg-[#FFF4E3]">
        <ContactLocation />
      </div>
      {/* <div id="contactStuActivity" className="w-full bg-[#FFF4E3]">
        <StuActivity />
      </div> */}
    </>
  );
};

export default ContactPage;
