import Practice from './Components/Practice';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <>
      <Routes>
        
          {routes.map(route => (
            <Route path={route.path} element={<route.component/>} />
          ))
          };
        
      </Routes>
      {/* <Practice/> */}
    </>
  );
}

export default App;
