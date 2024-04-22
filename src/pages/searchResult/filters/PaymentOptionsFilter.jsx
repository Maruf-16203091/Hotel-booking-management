import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const PaymentOptionsFilter = ({ options, onChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleOptionChange = (option) => {
        const newSelectedOptions = selectedOptions.includes(option)
            ? selectedOptions.filter((item) => item !== option)
            : [...selectedOptions, option];

        setSelectedOptions(newSelectedOptions);
        onChange(newSelectedOptions);
    };

    return (
        <FormGroup>
            <legend>Payment Options Filter</legend>
            {options.map((option) => (
                <FormControlLabel
                    key={option}
                    control={
                        <Checkbox
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleOptionChange(option)}
                        />
                    }
                    label={option}
                />
            ))}
        </FormGroup>
    );
};

export default PaymentOptionsFilter;
