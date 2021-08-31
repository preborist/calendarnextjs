import Link from 'next/link';
import s from './Navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={s.navigation}>
      <Link href="/">
        <a className={s.link}>HOME</a>
      </Link>
      <Link className={s.link} href="/about">
        <a>ABOUT US</a>
      </Link>
    </nav>
  );
}
