import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

// React router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// styles
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="top-60">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className="main-content container-shadow">
                <Switch>
                  <Route path='/Resume' component={Resume} />
                  <Route exact path='/Portfolio/:keyword' component={Portfolio} />
                  <Route exact path='/Portfolio/page/:pageNumber' component={Portfolio} />
                  <Route path='/Portfolio' component={Portfolio} />
                  <Route path='/Contact' component={Contact} />
                  <Route path='/' component={Home} />
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
