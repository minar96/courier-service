import { getDictionary } from '@/get-dictionary';
import LoginForm from '@/components/Login/LoginForm';
import type { Locale } from "@/i18n-config";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-[#fff4e33d]">
      <LoginForm dictionary={dictionary} lang={lang} />
    </div>
  );
}
