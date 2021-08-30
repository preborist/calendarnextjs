import Calendar from '../components/Calendar';
import { useState } from 'react';

import { MainLayout } from '../components/MainLayout';
import Modal from '../components/Modal';

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [date, setDate] = useState(null);
  const handleDateChange = date => {
    setDate({ date });
    setIsOpenModal(true);
  };
  return (
    <MainLayout>
      <h1>Choose the day for the meeting</h1>
      <p>
        We encourage you to book your appointment online. This will save you
        time.
      </p>

      <Calendar />
      {/* <Modal /> */}
    </MainLayout>
  );
}
