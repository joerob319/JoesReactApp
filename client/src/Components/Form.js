import React, { useState} from 'react';
import { db } from '../firebase';


function WeightForm () {

    const [weight, setWeight] = useState({weight: 0});

    const handleSubmit = (evt) => {
        evt.preventDefault();
        db.collection('weight').add({
            weight: Number(weight),
            date: new Date ()
        
        });
        
        setWeight({weight: 0});
    };

    return (
        <form onSubmit = {handleSubmit}>
            <label>Weight:
                <input
                    type = 'number'
                    name = 'weight'
                    value = {weight}
                    onChange = {e => setWeight(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default WeightForm
