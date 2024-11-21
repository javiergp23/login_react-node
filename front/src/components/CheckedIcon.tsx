import { useState } from "react";

export const CheckedIcon = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <label className="container">
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={handleChange}
            />
            <div className="checkmark"></div>
        </label>
    )
}