import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const TableDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
            <div class="container">
                <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart // tells this DatePicker that it is part of a range*
                startDate={startDate}
                />
                <DatePicker
                    selected={endDate}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    onChange={date => setEndDate(date)}
                />
            </div>
        </div>
    );
    };

export default TableDatePicker