import { useState } from "react";

const DivForm = () => {
    const [divs, setDivs] = useState([]);
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setDivs([...divs, { height, width, backgroundColor }]);
        setHeight("");
        setWidth("");
        setBackgroundColor("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
                <input type="text" placeholder="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
                <input type="text" placeholder="Background Color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} />
                <button type="submit">Add Div</button>
            </form>
            {divs.map((div, index) => (
                <div key={index} style={{ height: div.height, width: div.width, backgroundColor: div.backgroundColor }}></div>
            ))}
        </div>
    );
};

export default DivForm;