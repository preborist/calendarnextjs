import { MainLayout } from '../components/MainLayout';
import s from '../styles/about.module.scss';

export default function Home() {
  return (
    <MainLayout title="About Us">
      <section className={s.about}>
        <h1 className={s.title}>Lorem ipsum creation timelines</h1>
        <p className={s.text}>
          So how did the classical Latin become so incoherent? According to
          McClintock, a 15th century typesetter likely scrambled part of
          Cicero&apos;s De Finibus in order to provide placeholder text to
          mockup various fonts for a type specimen book.
        </p>
        <p className={s.text}>
          It&apos;s difficult to find examples of lorem ipsum in use before
          Letraset made it popular as a dummy text in the 1960s, although
          McClintock says he remembers coming across the lorem ipsum passage in
          a book of old metal type samples. So far he hasn&apos;t relocated
          where he once saw the passage, but the popularity of Cicero in the
          15th century supports the theory that the filler text has been used
          for centuries.
        </p>
        <p className={s.text}>
          And anyways, as Cecil Adams reasoned, “[Do you really] think graphic
          arts supply houses were hiring classics scholars in the 1960s?”
          Perhaps. But it seems reasonable to imagine that there was a version
          in use far before the age of Letraset.
        </p>
        <p className={s.text}>
          McClintock wrote to Before & After to explain his discovery; “What I
          find remarkable is that this text has been the industry&apos;s
          standard dummy text ever since some printer in the 1500s took a galley
          of type and scrambled it to make a type specimen book; it has survived
          not only four centuries of letter-by-letter resetting but even the
          leap into electronic typesetting, essentially unchanged except for an
          occasional &apos;ing&apos; or &apos;y&apos; thrown in. It&apos;s
          ironic that when the then-understood Latin was scrambled, it became as
          incomprehensible as Greek; the phrase &apos;it&apos;s Greek to
          me&apos; and &apos;greeking&apos; have common semantic roots!” (The
          editors published his letter in a correction headlined “Lorem
          Oopsum”).
        </p>
      </section>
    </MainLayout>
  );
}
