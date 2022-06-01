import { useState } from "react";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Container,
  Button,
} from "@mui/material";

import PopOver from "../../components/PopOver";

function SummaryForm() {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const onChangeCheckBox = (e) => {
    e.target.checked ? setBtnDisabled(false) : setBtnDisabled(true);
  };

  const checkboxLabel = (
    <span>
      I agree to
      <PopOver
        mainText="Terms and conditions"
        popOverContent="No ice cream will actually be delivered"
      />
    </span>
  );

  return (
    <Container fixed>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color="secondary" onChange={onChangeCheckBox} />}
          label={checkboxLabel}
        />
      </FormGroup>
      <Button variant="contained" disabled={btnDisabled}>
        Confirm order
      </Button>
    </Container>
  );
}

export default SummaryForm;
