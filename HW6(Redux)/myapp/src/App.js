import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, decrByPayloadAction, dellProduct, incrByPayloadAction } from './store/countReduser';
import Products from './components/Products';


function App() {



  return (
    <div className='container'>
      <Products/>
      <div className='btns'></div>
    </div>
  );
}

export default App;
