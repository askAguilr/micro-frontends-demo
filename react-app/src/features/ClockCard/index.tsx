import {Card, CardContent, Typography,} from '@mui/material';
import {useState, useEffect} from "react";

export default function ClockCard() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Card sx={{maxWidth: 345}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a React Component
        </Typography>
      </CardContent>
    </Card>
  );
}