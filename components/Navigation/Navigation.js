import Link from 'next/link';
import s from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/about">
        <a>ABOUT US</a>
      </Link>
    </nav>
  );
}
