// 1. Kod sprzed zadania "Stan komponentu" z 07-typescript

// import { useState } from "react"

// const Slogan =() =>{
//     let text
//     const [state, setState] = useState('text1')
//     setTimeout(()=>{setState('text2')}, 5000)
//     if (state == 'text2'){
//     text = 'Lorem ipsum'
//     }
//     else {text = 'Dolor sit ames'}
//     return <div className='Slogan'>
//         <div>{text}</div>
//         <img className='sloganImage' src='images/p1.jpg'></img>
//     </div>
    
// }
// export default Slogan

// 2. Kod w ramach zadania "Stan komponentu" z 07-typescript

import { useState } from "react";

type SloganState = 'text1' | 'text2';

const Slogan = () => {
    const [state, setState] = useState<SloganState>('text1');

    const updateState = (newState: SloganState) => {
        if (newState === 'text1' || newState === 'text2'){
            setState(newState);
    } else {
        console.error('Invalid value', newState);
    }
};

setTimeout(() => { updateState('text2') }, 5000);

const text = state === 'text2' ? 'Lorem ipsum' : 'Dolor sit ames';

return (
    <div className='Slogan'>
        <div>{text}</div>
        <img className='sloganImage' src='images/p1.jpg' alt='Slogan' />
    </div>
)
};

export default Slogan;