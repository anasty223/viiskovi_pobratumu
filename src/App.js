import './App.css';
import { Routes, Route,       HashRouter } from "react-router-dom";
import Layout from './components/Layout/Layout';
import { HomePage } from './components/HomePage/HomePage';
import { AboutUs } from './components/AboutUs/AboutUs';
import { HelpPage } from './components/HelpPage/HelpPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />


          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="help" element={<HelpPage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
