import Calendar from '../components/Calendar';

import { MainLayout } from '../components/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <h1>Choose the day for the meeting</h1>
      <p>
        We encourage you to book your appointment online. This will save you
        time.
      </p>
      <Calendar />
    </MainLayout>
  );
}
