import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routering from './routes/routes';
import MyGlobalStyles from './styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles />
    <Routering />
  </StrictMode>
);
