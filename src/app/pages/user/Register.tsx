import Image from 'next/image';
import { Button } from '../../components/button';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { KeyIcon } from '@heroicons/react/24/outline';
import styles from './Home.module.css';
import { Spinner } from '../../components/spinner/spinner';
import Input from '../../components/input/Input';

export default function Register() {
  return (
    <main className='flex  items-center justify-center min-h-screen		'>
      <div className={styles.backgroundContainer}>
        <div className='relative bg-white bg-opacity-70 shadow-md rounded-lg m-2'>
          <div className='absolute inset-0 bg-white rounded-lg'></div>
          <div className='relative p-4'>
            <div>
              <label
                className='block text-xs font-medium text-gray-900'
                htmlFor='email'
              >
                Email
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
                className='block text-xs font-medium text-gray-900'
                htmlFor='password'
              >
                Password
              </label>

              <Input
                id='password'
                type='password'
                name='password'
                placeholder='Enter password'
                required
                minLength={6}
              >
                <KeyIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
              </Input>
            </div>
            <div className='mt-4 text-right'>
              <p className='text-gray-900 text-xs'>forgot password ?</p>
            </div>
            <div className='flex items-center justify-center mt-4'>
              <button className='py-1 bg-blue-500 text-white text-xs rounded-full rounded-l-full rounded-r-full w-8/12	'>
                Log in
              </button>

              {/* <Spinner /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
