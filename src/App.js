import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Firstnavbar from './Components/first_navbar/firstnavbar';
import Mainnavbar from './Components/mainnavbar/mainnavbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Course from './Components/Courses/Course';


function App() {
  return (
    <div className="App">
    <Router>
      <Firstnavbar />
      <Mainnavbar />
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact_us" component={Contact} />
        <Route exact path="/blog" component={Blog} />
         <Route exact path="/course" component={Course} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
