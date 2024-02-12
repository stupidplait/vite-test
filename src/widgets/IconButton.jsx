import { useState } from "react";

export function IconButton({ image }) {
    const [count, setCount] = useState(0);

    return (
        <button className="relative flex justify-center items-center">
            <img src={image} alt="icon" />
            {image.includes('basket') && <div className="circle">{count}</div>}
        </button>
    );
}