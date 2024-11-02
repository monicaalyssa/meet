import { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

    useEffect(() => {
        setData(getData());
    }, [`${events}`]);

    const getData = () => {
        const data = genres.map(genre => {
          const filteredEvents = events.filter(event => event.summary.includes(genre));  
          return { name: genre, value: filteredEvents.length }
        })
        return data;
    };
};

export default EventGenresChart;