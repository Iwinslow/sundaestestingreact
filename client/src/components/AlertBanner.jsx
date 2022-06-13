import { Alert } from '@mui/material';

function AlertBanner({ message, variant }) {
  const alertMessage =
    message || 'An unexpected error ocurred, Plese try again later';
  const alertVariant = variant || 'error';
  return <Alert severity={alertVariant}>{alertMessage}</Alert>;
}

export default AlertBanner;
