import { useState, forwardRef, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const ProjectedAmountsT2 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [weekDay, setWeekDay] = useState('');
  const [nextDay, setnextDay] = useState('');
  const [coh, setCoh] = useState('');
  const [delivPos, setDelivPos] = useState('');
  const [ncuNeg, setNcuNeg1] = useState('');
  const [ncuNeg2, setNcuNeg2] = useState('');
  const [ncuNeg3, setNcuNeg3] = useState('');
  const [ncuNeg4, setNcuNeg4] = useState('');
  const [end, setEnd] = useState('');
  const [end2, setEnd2] = useState('');
  const [end3, setEnd3] = useState('');

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


  return (
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
          <th>Today: Friday</th>
        </tr>
        <tr>
          <th>Delivery: Sat & Mon delivery</th>
        </tr>
        <tr>
          <th>Projected $ Amounts</th>
        </tr>
        <tr>
          <td>Friday</td>
          <td>COH =</td>
          <td>
            <input type='number' name='cash-on-hand' placeholder='Opening Vault Total $' onChange={(event) => setCoh(event.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>Deliv +</td>
          <td>
            <input type='number' name='expected-cash' placeholder='Expected Cash Order' onChange={(event) => setDelivPos(event.target.value)} />
          </td>              </tr>
        <tr>
          <td>Friday</td>
          <td>NCU -</td>
          <td>
            <input type='number' name='hundreds' placeholder="Net Cash Used" onChange={(event) => setNcuNeg1(event.target.value)} />
          </td>
        </tr>
        <tr>
          <td><b>Friday</b></td>
          <td><b>End =</b></td>
          <td>{(Number(coh) + Number(delivPos) - Number(ncuNeg)).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>NCU -</td>
          <td>
            <input type='number' name='hundreds' placeholder="Net Cash Used" onChange={(event) => setNcuNeg2(event.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>NCU -</td>
          <td>
            <input type='number' name='hundreds' placeholder="Net Cash Used" onChange={(event) => setNcuNeg3(event.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>Deliv +</td>
          <td>{Math.abs(Number(end2) - ((Number(coh) + Number(delivPos) - Number(ncuNeg)) - Number(ncuNeg2) - Number(ncuNeg3))).toFixed(2)}</td>
        </tr>
        <tr>
          <td><b>Sunday</b></td>
          <td><b>End =</b></td>
          <td>
            <input type='number' name='end' placeholder='Predicted $ End of Day' onChange={(event) => setEnd2(event.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Monday</td>
          <td>NCU -</td>
          <td>
            <input type='number' name='hundreds' placeholder="Net Cash Used" onChange={(event) => setNcuNeg4(event.target.value)} />
          </td>
        </tr>
        <tr>
          <td>Monday</td>
          <td>Deliv +</td>
          <td>{((Number(end2) - Number(ncuNeg4)) - Number(end3)).toFixed(2)}</td>
        </tr>
        <tr>
          <td><b>Monday</b></td>
          <td><b>End =</b></td>
          <td>
            <input type='number' name='end' placeholder='Predicted $ End of Day' onChange={(event) => setEnd3(event.target.value)} />
          </td>
        </tr>
      </table>
    </div>
  )
}