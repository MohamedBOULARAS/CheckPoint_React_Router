import './App.css';
import Accueil from './Accueil'
import Contact from './Contact'
import Projet from './Projet'
import Navigation from './Navigation'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Acceuil from './Accueil';




function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
       

      <Navigation />

      <Switch>
          <Route path="/" exact component={Accueil}/>
          <Route path="/Projer" exact component={Projet}/>
          <Route path="/Contact/:slug" exact component={Contact}/>
          <Route path="/" component={() => <div>ERREUR 404</div> }/>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
