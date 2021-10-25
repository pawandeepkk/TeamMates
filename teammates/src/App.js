import { Switch, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import SignIn from './components/pages/Signin';
import Contact from './components/pages/Contact';


function App() {
  return (
    <Layout>
      <Switch>

        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/signin'>
          <SignIn />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
