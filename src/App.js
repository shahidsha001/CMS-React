import logo from './logo.svg';
import './App.css';
import Home from './HomeComponents/Home';
import AboutUs from './AboutUsComponents/AboutUs';
import Contact from './Contact/ContactComponent';
import Blog from './BlogComponents/Blog';
import Testimonials from './TestimonialComponents/Testimonial';
import Client from './ClientComponents/Client';
import WorkShop from './TrainingWorkshopComponents/WorkShop';
import Service from './ServiceComponents/Service';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavbarMat from './NavBarMat';
function App() {
  return (
    <Router>
      <div>
        {/* <Home /> */}
        {/* <AboutUs/> */}
        {/* <Contact/> */}
        {/* <Blog/> */}
        {/* <Testimonials/> */}
        {/* <Client/> */}
        {/* <WorkShop/> */}
        {/* <Service/> */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/testimonial" exact component={Testimonials} />
          <Route path="/client" exact component={Client} />
          <Route path="/workshop" exact component={WorkShop} />
          <Route path="/service" exact component={Service} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
