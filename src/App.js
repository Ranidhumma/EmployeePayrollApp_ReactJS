import './App.css';
import PayrollForm from './components/PayrollForm';
import HomePage from './components/HomePage';
import { BrowserRouter,Route,Switch } from 'react-router-dom';


function App() {
  return (
 
    <div className="App">
      <BrowserRouter>
       <Switch>
         <Route exact path='/payroll-form' component={PayrollForm}></Route>
         <Route path='/' component={HomePage}></Route>
         <Route path='/home' component={HomePage}></Route>
         <Route exact path="/payroll-form/:id" component={PayrollForm}></Route>
       </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
