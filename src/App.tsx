import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={Form} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
