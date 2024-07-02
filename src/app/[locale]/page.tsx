import Image from 'next/image';
import { Button } from '../components/button';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import { KeyIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import styles from './Home.module.css';
import { Spinner } from '../components/spinner/spinner';
import Input from '../components/input/Input';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FormEvent } from 'react';
import { useRouter } from 'next/router';
export default function Home() {
  const t = useTranslations();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const router = useRouter();

    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      router.push('/profile');
    } else {
      // Handle errors
    }
  }

  return (
    <main className='flex items-center justify-center min-h-screen'>
      <div className={styles.backgroundContainer}>
        <div className='relative bg-white bg-opacity-70 shadow-md rounded-lg m-2'>
          <div className='absolute inset-0 bg-white rounded-lg'></div>
          <form onSubmit={}>
            <div className='relative p-4'>
              <div>
                <label
                  className='block text-xs font-medium text-gray-900 mb-2'
                  htmlFor='email'
                >
                  {t('user.email')}
                </label>
                <Input
                  id='email'
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                  required
                >
                  <EnvelopeIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </Input>
              </div>
              <div className='mt-4'>
                <label
                  className='block text-xs font-medium text-gray-900 mb-2'
                  htmlFor='password'
                >
                  {t('user.password')}
                </label>

                <Input
                  id='password'
                  type='password'
                  name='password'
                  placeholder='Enter password'
                  required
                  minLength={6}
                >
                  <KeyIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </Input>
              </div>
              <div className='mt-4 text-right'>
                <p className='text-gray-900 text-xs'> {t('auth.forgot')} </p>
              </div>
              <Link href={`/en/dashboard`}>dashboard</Link>
              <div className='flex items-center justify-center mt-4'>
                <button className='flex items-center px-2 py-1 bg-white border-violet-800 border-2 text-gray-900 text-xs rounded-full w-full justify-between'>
                  {t('auth.singIn')}
                  <ChevronRightIcon
                    className='h-5 w-5 text-gray-400 text-violet-800'
                    aria-hidden='true'
                  />
                </button>

                {/* <Spinner /> */}
              </div>
              <div className='flex items-center justify-center mt-2'>
                <button className='flex items-center px-2 py-1 bg-white border-violet-800 border-2 text-gray-900 text-xs rounded-full w-full justify-between'>
                  {t('auth.singUp')}
                  <UserPlusIcon
                    className='h-5 w-5 text-gray-400 text-violet-800'
                    aria-hidden='true'
                  />
                </button>

                {/* <Spinner /> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
