import s from './Text.module.scss';

export default function Text() {
  return (
    <section className={s.text}>
      <h1 className={s.title}>
        Choose the day <br />
        for the meeting
      </h1>
      <p className={s.description}>
        We encourage you to book your appointment online.
        <br />
        This will save you time.
      </p>
    </section>
  );
}
