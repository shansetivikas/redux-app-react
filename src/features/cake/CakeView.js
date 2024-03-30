import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import store from "../../app/store";

const CakeView = () => {
    console.log(store.getState())
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch();
    const [orderedValue, setOrdered] = useState(1);

    const updateValue = (e) => {
        setOrdered(e.target.value);
    }
    return (
        <div>
            <h1> Num of Cakes {numOfCakes} </h1>
            <input type="number" onChange={updateValue} />
            <button onClick={()=>dispatch(ordered(orderedValue))}>Order Cake</button>
            <button onClick={()=>dispatch(restocked(3))}>Restock Cake</button>
        </div>
    )
}

export default CakeView;