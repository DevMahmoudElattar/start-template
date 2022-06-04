import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators } from './Redux';
import { RootState } from './Redux/reducers';

function App() {

  const state = useSelector((state: RootState) => state.bank)
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch)
  
  return (
    <div className="App">
      <header className=" App-header">
        <h1 className='text-3xl font-bold underline'> 
          {state}
        </h1>
      </header>

      <div><button onClick={() => depositMoney(1000)}>Deposit</button></div>
      <div><button onClick={() => withdrawMoney(1000)}>Withdraw</button></div>
      <div><button onClick={() => bankrupt()}>Bankrupt</button></div>
    </div>
  );
}

export default App;
