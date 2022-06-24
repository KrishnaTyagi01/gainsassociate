import React, { useMemo } from 'react';
import get from 'lodash/fp/get';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import formatDate from 'date-fns/format';
// import { useIntl } from "gatsby-plugin-intl"
import { enGB, fr } from 'date-fns/locale';

export default function Calendar({ events, ...props }) {
  const dayEvents = useMemo(
    () =>
      events.reduce(
        (acc, current) => ({
          ...acc,
          [formatDate(current.start, 'yyyy-MM-dd')]: current,
        }),
        {}
      ),
    [events.length]
  );

  function renderDay({ el, date, view }) {
    const dayEvent = get([formatDate(date, 'yyyy-MM-dd')])(dayEvents);

    if (dayEvent) {
      const uid = get(['doc', '_meta', 'uid'])(dayEvent);
      const imgUrl = get(['doc', 'company_logo', 'url'])(dayEvent);
      const html = `
        <a href="/events/${uid}" class="event-logo"><img src="${imgUrl}" /></a>
      `;

      el.classList.add('has-event');
      el.innerHTML = html;

      return;
    }
  }

  // const intl = useIntl();

  return (
    <FullCalendar
      {...props}
      events={events}
      locale= {enGB}
      defaultView="dayGridMonth"
      plugins={[dayGridPlugin]}
      header={{ left: 'prev', center: 'title', right: 'next' }}
      dayRender={renderDay}
      height={'auto'}
      view={{
        month: { // name of view
          titleFormat: 'MMMM YYYY'
          // other view-specific options here
      },
      dayGridMonth: {
          titleFormat: " MMMM D YYYY"
      },
      day: {
          titleFormat: 'D MMM, YYYY'
      }
      }}
      />
  );
}
