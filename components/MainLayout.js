import Head from 'next/head';
import Navigation from './Navigation';

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
      <Navigation />
      <main>{children}</main>
    </>
  );
}
