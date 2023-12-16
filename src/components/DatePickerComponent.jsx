import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "react-bootstrap";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <div>
      {/* Using react-bootstrap Form Control */}
      <Form.Control
        type="date"
        value={startDate.toISOString().substr(0, 10)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        min={new Date().toISOString().substr(0, 10)}
      />
    </div>
  );
};

export default DatePickerComponent;