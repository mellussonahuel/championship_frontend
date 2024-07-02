'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const changeLocale = (locale: string) => {
    const path = window.location.pathname;
    const newPath = `/${locale}${path.substring(3)}`;
    startTransition(() => {
      router.replace(newPath);
    });
  };

  return (
    <div className='flex'>
      <button
        disabled={isPending}
        className={`text-white ${localeActive === 'en' ? ' underline' : ''}`}
        onClick={() => changeLocale('en')}
      >
        En
      </button>
      <span className='mx-1'>|</span>
      <button
        disabled={isPending}
        className={`text-white ${localeActive === 'es' ? 'underline' : ''}`}
        onClick={() => changeLocale('es')}
      >
        Es
      </button>
    </div>
  );
}
