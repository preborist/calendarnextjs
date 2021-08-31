import Calendar from '../components/Calendar';
import { useState } from 'react';
import Text from '../components/Text/Text';

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
      <div className="df section">
        <Text />
        <Calendar />
      </div>
    </MainLayout>
  );
}
