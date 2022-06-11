import { Card, CardMedia, Typography } from '@mui/material';

function ScoopOptions({ name, imagePath }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="190"
        image={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Typography gutterBottom variant="h4" component="div">
        {name}
      </Typography>
    </Card>
  );
}

export default ScoopOptions;
