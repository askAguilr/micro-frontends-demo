import {Button, Card, CardActions, CardContent, CardMedia, Typography,} from '@mui/material';
import {useState} from "react";

export default function ImageCard() {
  const [imgId] = useState(Math.floor(Math.random() * 1000))
  const [count, setCount] = useState(0)
  const handleIncrement = () => setCount(prevState => prevState + 1)
  const handleReset = () => setCount(0)
  return (
    <Card sx={{maxWidth: 345}}>
      <CardMedia
        sx={{height: 140}}
        image={"https://source.unsplash.com/featured/300x200?id="+imgId}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          This is a React Component
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You can update this in real time during development
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          {count}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleReset}>Reset</Button>
        <Button size="small" onClick={handleIncrement}>Increment</Button>
      </CardActions>
    </Card>
  );
}