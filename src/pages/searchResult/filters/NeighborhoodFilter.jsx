import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const NeighborhoodFilter = ({ options, onChange }) => {
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
            <legend>Neighborhood Filter</legend>
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

export default NeighborhoodFilter;
