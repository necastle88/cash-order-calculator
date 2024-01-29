import { useState } from 'react';
import './App.css';
import {
  Button,
} from "@fluentui/react-components";
import { OrderDetialList } from './components/OrderDetialList';
import "react-datepicker/dist/react-datepicker.css";
import { ProjectedAmounts } from './components/ProjectedAmounts';
import { ProjectedAmountsT2 } from './components/ProjectedAmountsT2';

function App() {
  const [_targetValue, setTargetValue] = useState()

  const getTargetValOnChange = (event) => {
    setTargetValue(event.target.value)
  }

  return (
    <div className="App">
      <header className="header">
      </header>
      <div className="body">
        <div className='key-deffinitions-container' style={{ display: 'flex', flexDirection: 'column' }}>
          <div className='header-key-deffinitions-container'>
            <h3>KEY/DEFINITIONS</h3>
          </div>
          <div className='body-key-deffinitions-container'>
            <div className='deffinitions-container-col-left'>
              <div><h4>COH:</h4>Opening Vault Total $</div>
              <div><h3>DELIV:</h3><p>Expected Cash Order
              </p></div>
              <div><h3>END:</h3><p>Predicted $ for End of Day
              </p></div>
            </div>
            <div className='deffinitions-container-col-left'>
              <div><h3>NCU:</h3><p>{`Net Cash Used (last 4 week's NCU's / 4 = NCU Prediction)`}</p></div>
              <div><h3>TARGET:</h3><p>{
                <>
                  <label>$</label>
                  <input required name="price" onChange={getTargetValOnChange} type='text' />
                </>
              }(The goal for Vault End of Day Total)
              </p>
              </div>

            </div>
          </div>
        </div>
        <div className='intructions'>
        <table>
          <thead>
          <tr>
          <th>Instructions</th>
        </tr>
          </thead>
          <tbody>
        <tr>
          <td>Bank Order Phone #</td>
        </tr>
        <tr>
          <td>1-844-831-2129</td>
        </tr>
        <tr>
          <td>Access / Pin</td>
        </tr>
        <tr>
          <td>[Varies] /</td>
        </tr>
        <tr>
          <td>Delivery Date</td>
        </tr>
        <tr>
          <td>[1] OK or [2] change</td>
        </tr>
        <tr>
          <td>[1] bills [3] coin finish</td>
        </tr>
        <tr>
          <td>[1] accept or [2] change</td>
        </tr>
        <tr>
          <td>confirmation #:</td>
        </tr>
        <tr>
          <input name='confirmation' title='confirmation title' type='text' placeholder='confirmation #'/>
        </tr>
          </tbody>
      </table>
        </div>
        <div className='table-content' style={{ display: 'flex' }}>
          <ProjectedAmounts />
          <ProjectedAmountsT2 />
          <OrderDetialList />
          <OrderDetialList />
        </div>
        <Button appearance="primary">Hello Fluent UI React</Button>
      </div>
    </div>
  );
}

export default App;
