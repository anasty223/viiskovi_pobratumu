import './App.css';
import { Routes, Route,       HashRouter } from "react-router-dom";
import Layout from './components/Layout/Layout';
import { HomePage } from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<HomePage />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
