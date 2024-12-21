import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./page/Home";
// import AnotherPage from "./page/AnotherPage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/another" element={<AnotherPage />} />  */}
      </Routes>
    </Router>
  );
}

export default App;