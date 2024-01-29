import { useState, forwardRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
  
export const ProjectedAmounts = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [weekDay, setWeekDay] = useState('');
    const [nextDay, setnextDay] = useState('');
    const [coh, setCoh] = useState('');
    const [delivPos, setDelivPos] = useState('');
    const [ncuNeg, setNcuNeg1] = useState('');
    const [ncuNeg2, setNcuNeg2] = useState('');
    const [end, setEnd] = useState('');
  
    useEffect(() => {
      setWeekDay(weekDays[startDate.getDay()])
      setnextDay(startDate.getDay() + 1 === 7 ? weekDays[0] : weekDays[startDate.getDay() + 1])
    }, [startDate])
  
    let weekDays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
  
    const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref) => (
      <button className="example-custom-input" onClick={onClick} ref={ref as any}>
        {value}
      </button>
    ));
    

    return(
        <div className="table-one-container">
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date as any)}
            customInput={<ExampleCustomInput />}
          />
        </div>
        <table>
          <tr>
            <th>Today: {weekDay}</th>
          </tr>
          <tr>
            <th>Delivery: {nextDay}</th>
          </tr>
          <tr>
            <th>Projected $ Amounts</th>
          </tr>
          <tr>
            <td>{weekDay}</td>
            <td>COH =</td>
            <td>
              <input type='number' name='cash-on-hand' placeholder='Opening Vault Total $' onChange={(event) => setCoh(event.target.value) } />
            </td>
          </tr>
          <tr>
            <td>{weekDay}</td>
            <td>Deliv +</td>
            <td>
              <input type='number' name='expected-cash' placeholder='Expected Cash Order' onChange={(event) => setDelivPos(event.target.value) } />
            </td>              </tr>
          <tr>
            <td>{weekDay}</td>
            <td>NCU -</td>
            <td>
              <input type='number' name='hundreds' placeholder="Net Cash Used" onChange={(event) => setNcuNeg1(event.target.value) } />
            </td>              
            </tr>
          <tr>
            <td>{weekDay}</td>
            <td><b>End =</b></td>
            <td>{(Number(coh) + Number(delivPos) - Number(ncuNeg)).toFixed(2)}</td>
          </tr>
          <tr>
            <td>{nextDay}</td>
            <td>NCU -</td>
            <td>
              <input type='number' name='hundreds' placeholder="Net Cash Used" onChange={(event) => setNcuNeg2(event.target.value) } />
            </td>            
            </tr>
          <tr>
            <td>{nextDay}</td>
            <td>Order +</td>
            <td>{Math.abs((Number(end) - ((Number(coh) + Number(delivPos) - Number(ncuNeg)) - Number(ncuNeg2)))).toFixed(2)}</td>
          </tr>
          <tr>
            <td>{nextDay}</td>
            <td><b>End =</b></td>
            <td>
              <input type='number' name='end' placeholder='Predicted $ End of Day' onChange={(event) => setEnd(event.target.value) } />
            </td>              
            </tr>
        </table>
      </div>
    )
}