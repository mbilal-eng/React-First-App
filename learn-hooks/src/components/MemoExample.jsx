import {useState,useMemo} from 'react';

function heavyCalculation(num){
    console.log('Calculating...')
    for(let i=0;i<1000000000;i++){
        // do nothing
    }
    return num*2
}

export default function MemoExample(){
    const [number,setNumber] = useState(0);
    const [theme,setTheme] = useState('light');

    // const doubleNumber = ()=>{
    //     heavyCalculation(number)
    // };

    const MemoizedDoubleNumber = useMemo(()=>{
        return heavyCalculation(number)
    },[number]);



return <div>
        <h1>UseMemo Example</h1>
        <h2>Double Number {MemoizedDoubleNumber}</h2>
        <input 
        type='number'   
        value={number}
        onChange={e=>setNumber(parseInt(e.target.value))}
        />
        <button 
        onClick={()=>setTheme(theme==='light'?'dark':'light')}  
        >Theme {theme}</button>

    </div>
}