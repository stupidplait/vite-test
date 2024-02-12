import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 class="font-bold text-gray-100 text-3xl tracking-wide">This is counter</h1>
            <button class="rounded-md px-4 py-2 bg-zinc-100 text-slate-900 font-semibold tracking-wide" onClick={() => setCount(count + 1)}>You clicked {count} times</button>
        </>
    );
}

export default App
