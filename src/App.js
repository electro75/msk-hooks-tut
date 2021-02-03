import React, { useState } from 'react';

function FruitBasket() {

    const fruits = ["Apple", "Kiwi", "Orange"];

    const initialState = {};

    

    const prices = {
        Apple: 10,
        Kiwi: 15,
        Orange: 12
    }

    fruits.forEach(fruit => {
        const price = prices[fruit];
        initialState[fruit] = {
            count: 0,
            price
        }
    })    

    const taxPercent = 2;
    
    const [basket, setBasket] = useState(initialState);

    let totalFcount = 0;
    let totalFPrice = 0;

    Object.keys(basket).forEach(fruitKey => {
        const fruit = basket[fruitKey];
        totalFcount += fruit.count;
        totalFPrice += fruit.count * fruit.price;
    })
 

    
    
    const taxPrice = totalFPrice * taxPercent /100;

    function addFruitToBasket(key) {
        setBasket({
            ...basket,
            [key]: {
                ...basket[key],
                count: basket[key].count + 1
            }
        })
    }

    function removeFruitFromBasket(key) {
        setBasket({
            ...basket,
            [key]: {
                ...basket[key],
                count: basket[key].count - 1
            }
        })
    }
    

    return (
    <div>
        <h1>Fruit Shop</h1>
        
        {Object.keys(basket).map(fruitKey => {
            const fruit = basket[fruitKey];
            return (
                <div key={fruitKey} >
                    {fruitKey}
                    <button onClick={() => addFruitToBasket(fruitKey)} >+</button>
                    {fruit.count}
                    <button onClick={() => removeFruitFromBasket(fruitKey)} >-</button>
                    
                </div>
            )
        })}

        <hr/>
        <h1>Invoice</h1>

        <div>Total Fruits Added: {totalFcount}</div>
        <div>Total Price: {totalFPrice}</div>
        <div>Tax %: {taxPercent}</div>
        <div>Tax Price: {taxPrice}</div>
        <br/>
        <div>Total Price: {totalFPrice + taxPrice}</div>
    </div>)
}

export default FruitBasket;


// Fruit Shop app

// Buying few fruits
// pay the bill
// generate an invoice
// invoice content : number of fruits, price, tax %
