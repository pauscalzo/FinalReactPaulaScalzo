import { useState } from "react";
import { Button } from "../Button/Button";

export const Counter = ({ initial=0, max }) => {
    const [count, setCount] = useState(initial);
    const increment = () => {
        if (count === max){ 
            return setCount(count)
         }
        setCount(count + 1);
    };
    const decrement = () => {
        if (count === 0){ 
            return setCount(0)
         }
        setCount(count - 1);
    };

    return (
        <>
            <div className="col-3">
                < Button text="-" variant="btn-outline-secondary me-2" functionClick={decrement}/>
                <strong>{count}</strong>
                < Button text="+" variant="btn-outline-secondary ms-2" functionClick={increment}/>
            </div>  
        </>
    );      
};

