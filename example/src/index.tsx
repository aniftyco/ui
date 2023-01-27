import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'nifty-ui/nifty-ui.css';
import { KitchenSink } from './KitchenSink';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KitchenSink />
  </StrictMode>
);
