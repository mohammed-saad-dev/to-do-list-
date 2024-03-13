import React, { useState } from 'react'

const Input = () => {
    const [val, setVal] = useState(""); // input value 
    const [item, setItem] = useState([ "osd drake"]); // items i want to do 
    const element = document.getElementsByTagName("li");
    function Delet(index){
        const newItem = [...item];
        newItem.splice(index, 1);
        setItem(newItem)
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            if (val.trim().length > 0) {
                setItem([...item, val]);
                setVal("");
            }
        }
    }

    function get(index){
        // console.log(item[index])
        
        element[index].className = element[index].className === "notDone" ? "done" : "notDone";
    }
    
    return (
        <div>
            <div>
                <input
                onKeyPress={handleKeyPress} 
                onChange={(e) => setVal(e.target.value)} 
                value={val} placeholder='what about today ?' type="text" className='input'/>

                <button 
                onClick={() => val.trim().length === 0 ? null : (setItem([...item, val],setVal("")))} 
                className='add'>Add</button>
                <button 
                style={{marginLeft:"10px"}} 
                className='add' onClick={() => setItem([])}>clear
                </button>
            </div>

            <div>
                <ul>
                    {item.map((i,index) => {
                        return(
                                <div key={index} className='wrab-items'>
                                    <li  className="notDone" key={index}>
                                        <p>{i}</p>
                                        <button onClick={() =>Delet(index)} >Delete</button>
                                        <button  onClick={() => get(index)}  >Done</button></li> 
                                </div>
                                )
                    })}
                </ul>
            </div>
        </div>
)
}

export default Input
