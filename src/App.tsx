import React from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/homepage/home';
import { weatherGetter } from './redux/weather/actions';



function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(weatherGetter({}))
  })
  
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
