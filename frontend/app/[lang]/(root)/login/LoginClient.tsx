'use client'

import LoginForm from "@/components/Login/LoginForm"
import type { Locale } from "@/i18n-config"

interface LoginClientProps {
  dictionary: any
  lang: Locale
}

export default function LoginClient({ dictionary, lang }: LoginClientProps) {
  return <LoginForm lang={lang} dictionary={dictionary} />
}