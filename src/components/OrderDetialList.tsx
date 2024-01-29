import { useState } from 'react';

export const OrderDetialList = () => {
    const [hundreds, setHundreds] = useState('');
    const [fifties, setfifties] = useState('');
    const [twenties, settwenties] = useState('');
    const [tens, settens] = useState('');
    const [fives, setfives] = useState('');
    const [ones, setones] = useState('');
    const [quarters, setquarters] = useState('');
    const [dimes, setdimes] = useState('');
    const [nickels, setnickels] = useState('');
    const [pennies, setpennies] = useState('');

    const totalCountResult = Number(hundreds) + Number(fifties) + Number(twenties) + Number(tens) + Number(fives) + Number(ones) + Number(quarters) + Number(dimes) + Number(nickels) + Number(pennies)   
    const totalCurrencyResult = (Number((hundreds as any) * 100) + Number((fifties as any) * 50) + Number((twenties as any) * 20) + Number((tens as any) * 10) + Number((fives as any) * 5) + Number((ones as any) * 1) + Number((quarters as any) * 0.25) + Number((dimes as any) * 0.10) + Number((nickels as any)* 0.05) + Number((pennies as any) * 0.01)).toFixed(2) 
  

    return(
        <div className="order-detial-list-container">
        <table>
          <thead>
            <tr>
              <th>ORDER DETAIL</th>
            </tr>
            <tr>
              <th>Day: </th>
              <th><input type='text' name='day' /></th>
            </tr>
            <tr>
              <th>Order #:</th>
              <th><input type='text' name='order' /></th>
            </tr>
            <tr>
              <th>Projected $ Amounts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>100s<br />($1,000)</td>
              <td>
                <input type='number' name='hundreds' placeholder='Enter number of 100s' onChange={(event) => setHundreds(event.target.value) } />
              </td>
              <td>${((hundreds as any) * 100).toFixed(2)}</td>
            </tr>
            <tr>
              <td>50s<br />($1,000)</td>
              <td>
                <input type='number' name='fifties' placeholder='Enter Number of 50s' onChange={(event) => setfifties(event.target.value) } />
              </td>                  
              <td>${((fifties as any) * 50).toFixed(2)}</td>
            </tr>
            <tr>
              <td>20s<br />($1,000)</td>
              <td>
                <input type='number' name='twenties' placeholder='Enter Number of 0s'onChange={(event) => settwenties(event.target.value) } />
              </td>                  
              <td>${((twenties as any) * 20).toFixed(2)}</td>
            </tr>
            <tr>
              <td>10s<br />($250)</td>
              <td>
                <input type='number' name='tens' placeholder='Number of 10s' onChange={(event) => settens(event.target.value)} />
              </td>
              <td>${((tens as any) * 10).toFixed(2)}</td>
            </tr>
            <tr>
            <td>5s<br />($125)</td>
              <td>
                <input type='number' name='fives' placeholder='Number of 5s'onChange={(event) => setfives(event.target.value)} />
              </td>
              <td>${((fives as any) * 5).toFixed(2)}</td>
            </tr>
            <tr>
            <td>1s<br />($50)</td>
              <td>
                <input type='number' name='ones' placeholder='Enter Number of 1s' onChange={(event) => setones(event.target.value)} />
              </td>
              <td>${((ones as any) * 1).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Quarters<br />($10)</td>
              <td>
                <input type='number' name='quarters' placeholder='Enter Number of quarters' onChange={(event) => setquarters(event.target.value)} />
              </td>
              <td>${((quarters as any)* 0.25).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Dimes<br />($5)</td>
              <td>
                <input type='number' name='dimes' placeholder='Enter Number of dimes' onChange={(event) => setdimes(event.target.value)} />
              </td>
              <td>${((dimes as any)* 0.10).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Nickels<br />($2)</td>
              <td>
                <input type='number' name='nickels' placeholder='Enter Number of nickels' onChange={(event) => setnickels(event.target.value)} />
              </td>
              <td>${((nickels as any)* 0.05).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Pennies<br />($0.50)</td>
              <td>
                <input type='number' name='pennies' placeholder='Enter Number of pennies' onChange={(event) => setpennies(event.target.value)} />
              </td>
              <td>${((pennies as any)* 0.01).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>
                {totalCountResult}
              </td>
              <td>${totalCurrencyResult}</td>
            </tr>
            <tr>
              <td>Actual NCU</td>
            </tr>
            <tr>
              <td>
                <input type='text' name='actualNCU' />
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    )
}