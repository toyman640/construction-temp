import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
