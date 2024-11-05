import { useState, useEffect } from 'react';
import { format, addDays, startOfMonth, startOfWeek, endOfWeek, endOfMonth, isSameMonth, isSameDay } from 'date-fns';
import { ptBR } from 'date-fns/locale'; // Importa a locale em português

const RealTimeCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const startMonth = startOfMonth(currentDate);
  const startWeek = startOfWeek(startMonth);
  const endMonth = endOfMonth(startMonth);
  const endWeek = endOfWeek(endMonth);

  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const generateCalendar = () => {
    const rows = [];
    let day = startWeek;

    while (day <= endWeek) {
      const days = [];
      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = isSameMonth(day, startMonth);
        const isToday = isSameDay(day, currentDate);

        days.push(
          <div
            key={day}
            style={{
              width: '40px',
              padding: '10px',
              textAlign: 'center',
              backgroundColor: isToday ? '#8900C9' : isCurrentMonth ? '#' : '#444444',
              color: isToday ? '#ffffff' : isCurrentMonth ? '#ffffff' : '#888888',
              borderRadius: isToday ? '8px' : '5px',
              margin: '2px',
            }}
          >
            {format(day, 'd')}
          </div>
        );

        day = addDays(day, 1);
      }
      rows.push(<div key={day} style={{ display: 'flex', justifyContent: 'center' }}>{days}</div>);
    }
    return rows;
  };

  return (
    <div style={{ backgroundColor: '#303030', color: '#ffffff', padding: '20px', borderRadius: '38px', width: 'fit-content', margin: '0 auto', height:'413px' }}>
      <h2 style={{ color: '#8900C9', textAlign: 'left' }}>{format(currentDate, 'MMMM, yyyy', { locale: ptBR })}</h2>
      <br />
      <hr style={{border: 'none', borderTop: '2px solid #545454',}} />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        {weekDays.map((day) => (
          <div key={day} style={{ width: '43px', textAlign: 'center', color: '#B1008A', fontWeight: 'bold' }}>
            {day}
          </div>
        ))}
      </div>
      <div>
        {generateCalendar()}
      </div>
    </div>
  );
};

export default RealTimeCalendar;
