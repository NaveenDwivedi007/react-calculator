import React, { useEffect, useState } from 'react'
import './Calculator.css'
function Calculator(){

    const [result,setResult]= useState('')
    const [firstNum,setFirstNum]= useState('')
    const [num,setNum]= useState('')
    const [opr,setOpr]= useState('')

    useEffect(
        ()=>{
            if(opr!=="" && firstNum ===""){
                let temp = num
                setFirstNum(temp)
                setNum('')
            }
    },[opr,firstNum,num]
    )

    useEffect(()=>{
        let num1 = Number(firstNum)
        let num2 = Number(num)
        let operation =''
        if (firstNum !=="" && num !=="") {
           switch (opr) {
               case '-':
                   operation=num1-num2
                   break;
                   case '+':
                   operation=num1+num2
                   break;
                   case '*':
                   operation=num1*num2
                   break;
           
               default:
                   operation = "something went wrong"
                   break;
           } 
        }
        setResult(operation) 
    },[firstNum,num,opr])
   
    const submit=()=>{
        if (result === '') {
            setNum('')
            setOpr('')
            setFirstNum('')
        }else{
            setNum(result)
            setOpr('')
            setFirstNum('') 
        }
        
        
    }

    const addNum = (x)=>{
        setNum(num+x)         
    }
    
    const reset = ()=>{
        setNum('')
        setOpr('')
        setResult('')
        setFirstNum('')
    }

    const addOpr = (s)=>{
        if (firstNum !=='' && num !=='') {
            submit()
            setOpr(s)
        }else if(firstNum ===""){
            if (num !=='') {
                setFirstNum(num)
                setNum('')
                setOpr(s)  
            }else{
                setFirstNum(0)
                setOpr(s) 
            }
            
        }
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
            <button className="btn operation" onClick={()=>addOpr('-')}>-</button>
                
            </div>
            <div>
            <button className="btn" onClick={()=>addNum('4')} >4</button>
            <button className="btn" onClick={()=>addNum('5')} >5</button>
            <button className="btn" onClick={()=>addNum('6')} >6</button>
            <button className="btn operation" onClick={()=>addOpr('+')}>+</button>
            </div>
            <div>
            <button className="btn" onClick={()=>addNum('7')} >7</button>
            <button className="btn" onClick={()=>addNum('8')} >8</button>
            <button className="btn" onClick={()=>addNum('9')} >9</button>
            <button className="btn operation" onClick={()=>addOpr('*')}>*</button>
            </div>
            <div>
            <button className="btn operation" onClick={()=>reset()} >C</button>
            <button className="btn" onClick={()=>addNum('0')} >0</button>
            <button className="btn" onClick={()=>addNum('.')} >.</button>
            <button className="btn submit" onClick={()=>submit()}>=</button>
            </div>
        </div>
    )
}

export default Calculator