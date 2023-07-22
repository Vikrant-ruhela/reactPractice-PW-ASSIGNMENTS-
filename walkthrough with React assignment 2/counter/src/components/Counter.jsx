import { useState } from 'react'
import "../Styles/counter.css"

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <div className='count'>
                <h1>{count}</h1>
                <div className="buttons">
                    <button className='inc' onClick={() => setCount(count + 1)}>Increment</button>
                    <button className='inc' onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default Counter