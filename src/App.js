import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';

import HomePage from './pages/Home.js';
import StrategiesPage from './pages/Strategies.js';

import logo from './assets/images/logo.png';
import './assets/styles/App.css';

const PrimaryLayout = () => (
  <div className="App">
    <header>
      <img src={logo} alt="logo" />
      <h1>OmniAuth</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/strategies">List of Strategies</Link>
        <Link to="/resources">Documentation / Resources</Link>
        <Link to="/usage">Who's is Using OmniAuth?</Link>
      </nav>
    </header>

    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/strategies" exact component={StrategiesPage} />
        <Route path="/resources" exact component={ResourcesPage} />
        <Route path="/usage" exact component={UsagePage} />
        <Redirect to="/" />
      </Switch>
    </main>

    <footer></footer>
  </div>
)

const ResourcesPage = () => <div>Resources Page</div>
const UsagePage = () => <div>Usage Page</div>

const App = () => (
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>
)

export default App;
