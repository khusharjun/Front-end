import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
    return (
        <div>
            <BrowserRouter>
              <HeaderComponent/>    
                <div className="container">
                    <Switch>
                      <Route path = "/"exact component = {ListEmployeeComponent} ></Route>
                      <Route path = "/employees" component = {ListEmployeeComponent}> </Route>
                      <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
                      <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                    </Switch>    
                  
                </div>
              <FooterComponent/>
            </BrowserRouter>
        </div>
      
    );
}

export default App;
