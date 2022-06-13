import { Card, CardMedia, Typography } from '@mui/material';

function ToppingOption({ name, imagePath }) {
    return (
      <Card>
        <CardMedia
          component="img"
          height="190"
          image={`http://localhost:3030/${imagePath}`}
          alt={`${name} topping`}
        />
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
      </Card>
    );
}

export default ToppingOption