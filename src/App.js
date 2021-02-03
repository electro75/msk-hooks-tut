import React, { useState } from 'react';

function MyApp() {

    const [applesCount, setApplesCount] = useState(0);
    const [kiwiCount, setKiwisCount] = useState(0);
    const [orangeCount, setOrangessCount] = useState(0);

    const totalFcount = applesCount + kiwiCount + orangeCount;

    function addAppleToBasket() {
        setApplesCount(applesCount + 1);
    }

    function removeAppleFromBasket() {
        setApplesCount(applesCount - 1);
    }

    function addKiwiToBasket() {
        setKiwisCount(kiwiCount + 1);
    }

    function removeKiwiFromBasket() {
        setKiwisCount(kiwiCount -1);
    }

    function addOrangeToBasket() {
        setOrangessCount(orangeCount +1);
    }

    function removeOrangeFromBasket() {
        setOrangessCount(orangeCount -1);
    }

    return (
    <div>
        <h1>Fruit Shop</h1>
        <div>
            Apples
            <button onClick={addAppleToBasket} >+</button>
            {applesCount}
            <button onClick={removeAppleFromBasket} >-</button>
        </div>

        <div>
            Kiwi
            <button onClick={addKiwiToBasket} >+</button>
            {kiwiCount}
            <button onClick={removeKiwiFromBasket} >-</button>
        </div>

        <div>
            Orange
            <button onClick={addOrangeToBasket} >+</button>
            {orangeCount}
            <button onClick={removeOrangeFromBasket} >-</button>
        </div>
        
        <hr/>
        <h1>Invoice</h1>

        <div>Total Fruits Added: {totalFcount}</div>
        <div>Total Price: 100</div>
        <div>Tax %: 5</div>
        <div>Tax Price: 5</div>
        <br/>
        <div>Total Price: 105</div>
    </div>)
}

export default MyApp;


// Fruit Shop app

// Buying few fruits
// pay the bill
// generate an invoice
// invoice content : number of fruits, price, tax %
