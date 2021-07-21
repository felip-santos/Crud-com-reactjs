import './App.css';
import Home from './pages/home'
import Product from './pages/product'
import ListProducts from './pages/listProducts'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/src/addproduct" component={Product}/>
          <Route path="/src/listproducts" component={ListProducts}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
