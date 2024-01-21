import { useState } from "react"

const Slogan =() =>{
    let text
    const [state, setState] = useState('text1')
    setTimeout(()=>{setState('text2')}, 5000)
    if (state == 'text2'){
    text = 'Lorem ipsum'
    }
    else {text = 'Dolor sit ames'}
    return <div className='Slogan'>
        <div>{text}</div>
        <img className='sloganImage' src='images/p1.jpg'></img>
    </div>
    
}
export default Slogan