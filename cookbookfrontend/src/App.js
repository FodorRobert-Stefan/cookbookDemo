import logo from './logo.svg';
import './App.css';

import { BrowserRouter  , Routes,Route} from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Category from './pages/Category';
import Header from './components/Header';
import RecipeScreen from './pages/RecipeScreen';
import SpecialCategoryScreen from './pages/SpecialCategoryScreen';
function App() {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' Component={Page1} />
      <Route path='/recipes' Component={Page2} />
        <Route path='/category/:id' Component={Category} />
        <Route path='/recipesDetails/:id' Component={RecipeScreen} />
        <Route path='/specialCategory/:id' Component={SpecialCategoryScreen} />


    </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
