import React, { useMemo, useState } from 'react';
import { format, subDays, addDays, isSameDay } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePreviewsDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function handleTodayDay() {
    setDate(new Date());
  }

  const isToday = useMemo(() => isSameDay(date, new Date()), [date]);

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePreviewsDay}>
          <MdChevronLeft size={36} color="#fff" />
        </button>

        <strong>{dateFormatted}</strong>

        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <button type="button" onClick={handleTodayDay} today={isToday}>
        Ir para hoje
      </button>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Marcelo Silva</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Marcelo Silva</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Marcelo Silva</span>
        </Time>
      </ul>
    </Container>
  );
}
