import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schedule');
        setSchedule(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch schedule');
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Class Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedule.days.map((day) => (
          <Card key={day.day}>
            <CardHeader>
              <CardTitle>{day.day}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {day.classes.map((classInfo, index) => (
                  <li key={index} className="mb-2">
                    {classInfo.time} - {classInfo.name} ({classInfo.level})
                    <br />
                    <span className="text-sm text-gray-600">Instructor: {classInfo.instructor}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};