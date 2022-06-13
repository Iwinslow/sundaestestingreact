import { Container } from '@mui/material';

import Options from './Options';

function OrderEntry() {
  return (
    <Container maxWidth="sm">
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </Container>
  );
}

export default OrderEntry;
