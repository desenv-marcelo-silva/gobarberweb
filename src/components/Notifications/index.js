import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications size={20} color="#715951" />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unRead>
            <p>Você possui novo agendamento para amanhã.</p>
            <time>há dois.</time>
            <button type="button">Marcar como lida.</button>
          </Notification>
          <Notification>
            <p>Você possui novo agendamento para amanhã.</p>
            <time>há dois dias atrás.</time>
            <button type="button">Marcar como lida.</button>
          </Notification>
          <Notification>
            <p>Você possui novo agendamento para amanhã.</p>
            <time>há dois dias atrás.</time>
            <button type="button">Marcar como lida.</button>
          </Notification>
          <Notification>
            <p>Você possui novo agendamento para amanhã.</p>
            <time>há dois dias atrás.</time>
            <button type="button">Marcar como lida.</button>
          </Notification>
          <Notification>
            <p>Você possui novo agendamento para amanhã.</p>
            <time>há dois dias atrás.</time>
            <button type="button">Marcar como lida.</button>
          </Notification>
          <Notification>
            <p>Você possui novo agendamento para amanhã.</p>
            <time>há dois dias atrás.</time>
            <button type="button">Marcar como lida.</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
