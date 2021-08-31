import Head from 'next/head';
import Logo from './Logo';
import Navigation from './Navigation';
import s from './MainLayout.module.scss';

export function MainLayout({ children, title = ' WeRDevs' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="calendar,nextjs,werdevs"></meta>
        <meta name="description" content="calendar to app for werdevs"></meta>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={s.header}>
        <Logo />
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
}
