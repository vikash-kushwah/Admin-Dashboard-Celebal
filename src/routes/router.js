import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../lib/constants/routes';

// Enable future flags for React Router v7
const router = createBrowserRouter(ROUTES, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

export default router;
