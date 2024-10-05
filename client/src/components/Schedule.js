import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schedule');
        setSchedule(response.data);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div>
      <h2>Class Schedule</h2>
      {schedule.map((sched) => (
        <div key={sched._id}>
          <h3>{sched.month} {sched.year}</h3>
          {sched.days.map((day) => (
            <div key={day.day}>
              <h4>{day.day}</h4>
              {day.classes.map((cls) => (
                <p key={cls._id}>{cls.time} - {cls.name} ({cls.level})</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Schedule;
