import React, { useMemo, useState, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  isEqual,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

import pt from 'date-fns/locale/pt';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Time, ButtonToday } from './styles';

const rangeHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  const dayIsAnother = useMemo(() => !isEqual(new Date(), date), [date]);

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get('schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = rangeHours.map((hour) => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find((a) =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePreviewsDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function handleTodayDay() {
    setDate(new Date());
  }

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

      <ButtonToday onClick={handleTodayDay} showGoToday={dayIsAnother}>
        Ir para hoje
      </ButtonToday>

      <ul>
        {schedule.map((time) => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
