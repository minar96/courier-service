// app/[lang]/courses/[slug]/page.tsx

import Hero from "@/components/CourseDetails/Hero";
import CourseDefinition from "@/components/CourseDetails/CourseDefinition";
import CourseObjective from "@/components/CourseDetails/CourseObjective";
import CourseLearn from "@/components/CourseDetails/Learn";
import SkillFocus from "@/components/CourseDetails/SkillFocus";
import HowTeach from "@/components/CourseDetails/HowTeach";
import WhyKiddoz from "@/components/CourseDetails/WhyKiddoz";
import Promot from "@/components/CourseDetails/Promot";
import Recourse from "@/components/CourseDetails/Recourse";

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

// interface Props {
//   params: { lang: Locale; slug: string };
// }

const CoursePage = async (props: { params: Promise<{ lang: Locale, slug: string }> }) => {
  const { lang, slug } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <div id="courseDetailsHero" className="w-full bg-[#FFF4E3]">
        <Hero slug={slug} lang={lang} dictionary={dictionary}/>
      </div>
      <div id="CourseDetailsCourseDefinition" className="w-full bg-[#3A5DC4]">
        <CourseDefinition slug={slug} lang={lang} dictionary={dictionary} />
      </div>
      <div id="CourseDetailsCourseObjective" className="w-full bg-[#FFF4E3]">
        <CourseObjective slug={slug} lang={lang} dictionary={dictionary}/>
      </div>
      <div id="CourseDetailsLearn" className="w-full bg-[#51B59F]">
        <CourseLearn slug={slug} lang={lang} dictionary={dictionary}/>
      </div>
      <div id="CourseDetailsSkillFocus" className="w-full bg-[#FFF4E3]">
        <SkillFocus slug={slug} lang={lang} dictionary={dictionary}/>
      </div>
      <div id="CourseDetailsHowTeach" className="w-full bg-[#FFF4E3]">
        <HowTeach slug={slug} lang={lang} dictionary={dictionary}/>
      </div>
      <div id="CourseDetailsWhyKiddoz" className="w-full bg-[#FFF4E3]">
        <WhyKiddoz slug={slug} lang={lang} dictionary={dictionary}/>
      </div>
      <div id="CourseDetailsPromot" className="w-full bg-[#FFF4E3]">
        <Promot slug={slug} lang={lang} dictionary={dictionary}/>
      </div>
      <div id="CourseDetailsRecourse" className="w-full bg-[#FFF4E3]">
        <Recourse slug={slug} lang={lang} dictionary={dictionary}/>
      </div>
    </>
  );
};

export default CoursePage;
