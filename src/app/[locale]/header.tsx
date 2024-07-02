import LocaleSwitcher from '../components/localeSwitcher/LocaleSwitcher';

export default function Header() {
  return (
    <header>
      <nav>
        <div className='mt-3'>
          <div className='float-end mr-3 '>
            <LocaleSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
}
