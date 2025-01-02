import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import Vegetarian from './Pages/vegetarian';
import Vegan from './Pages/vegan';
import Pescatarian from './Pages/pescatarian';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vegetarian" element={<Vegetarian />} />
        <Route path="/vegan" element={<Vegan />} />
        <Route path="/pescatarian" element={<Pescatarian />} />
      </Routes>
    </Router>
  );
};

export default App;