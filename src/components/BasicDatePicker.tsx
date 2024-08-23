import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { TimePicker } from '@mui/x-date-pickers';

export default function BasicDatePicker() {
    const today = dayjs().format('YYYY-MM-DD');
    const [value, setValue] = useState<Dayjs | null>(dayjs(today));
    const [timeValue, setTimeValue] = useState<Dayjs | null>(dayjs().hour(14).minute(0));


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                onChange={(value: Dayjs | null) => setValue(value)}
                value={value}
                format="DD.MM.YYYY"
                disablePast
            />
            <TimePicker
                value={timeValue}
                onChange={(newValue: Dayjs | null) => setTimeValue(newValue)}
                ampm={false}
                minTime={dayjs().hour(14).minute(0)}
                maxTime={dayjs().hour(21).minute(0)}
            />
        </LocalizationProvider>
    );
}