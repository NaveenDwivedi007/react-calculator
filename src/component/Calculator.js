import React, { useEffect, useState } from 'react'
import './Calculator.css'
function Calculator(){

    const [result,setResult]= useState()
    const [firstNum,setFirstNum]= useState()
    const [num,setNum]= useState('')
    const [opr,setOpr]= useState()
    const [ans,setAns]= useState()
    useEffect(
        ()=>{
            if(opr!=="" && firstNum ===""){
                console.log(num);
                let temp = num
                setFirstNum(temp)
                setNum('')
                console.log(firstNum);
            }
    },[opr,firstNum,num]
    )
   
    
    const addNum = (x)=>{
                   setNum(num+x)         
    }
    const reset = ()=>{
        setNum('')
        setOpr('')
        setResult('')
        setFirstNum('')
    }

    return(
        <div className='container'>
        <div className="result ">
               {firstNum} {opr} {num}
            </div>
            <div className="result num">
               {result}
            </div>
            <div>
            <button className="btn" onClick={()=>addNum('1')} >1</button>
            <button className="btn" onClick={()=>addNum('2')} >2</button>
            <button className="btn" onClick={()=>addNum('3')}  >3</button>
            <button className="btn" onClick={()=>setOpr('-')}>-</button>
                
            </div>
            <div>
            <button className="btn" onClick={()=>addNum('4')} >4</button>
            <button className="btn" onClick={()=>addNum('5')} >5</button>
            <button className="btn" onClick={()=>addNum('6')} >6</button>
            <button className="btn" onClick={()=>setOpr('+')}>+</button>
            </div>
            <div>
            <button className="btn" onClick={()=>addNum('7')} >7</button>
            <button className="btn" onClick={()=>addNum('8')} >8</button>
            <button className="btn" onClick={()=>addNum('9')} >9</button>
            <button className="btn" onClick={()=>setOpr('*')}>*</button>
            </div>
            <div>
            <button className="btn" onClick={()=>reset()} >C</button>
            <button className="btn" onClick={()=>addNum('0')} >0</button>
            <button className="btn" onClick={()=>addNum('.')} >.</button>
            <button className="btn" onClick={()=>setAns('=')}>=</button>
            </div>
        </div>
    )
}

export default Calculator