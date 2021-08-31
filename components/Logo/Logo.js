import s from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={s.logo__wrapper}>
      <a className={s.logo__title}>
        <span className={s.logo__we}>
          W <br />E
        </span>
        <span className={s.logo__r}>R</span>
        <span className={s.logo__dews}>dews</span>
      </a>
    </div>
  );
}
