import React,{useState} from 'react'
function Calcultor(){

    const[input,setInput]=useState('');
    const[result,setResult]=useState('');

    const appendValue=(value)=>{
        
          setInput((prevInput)=>prevInput+value);
        }

    const calculate=()=>{
        try{
            const evaluatedResult=eval(input);
            if(input===''){
                setResult('Error');
            }
            else if(evaluatedResult===Infinity){
                setResult('Infinity');
            }
            else if(isNaN(evaluatedResult)){
                setResult('NaN');
            }
            else{
                setResult(evaluatedResult);
            }
           
        }
        catch(error){
            setResult('Error');
                
        }
    }
    const clearInput=()=>{
        setInput('');
        setResult('');
    }
    const handleButtonClick=(value)=>{
        if(value==='='){
            calculate();

        }
        else if(value==='C'){
            clearInput();
        }
        
        else{
            appendValue(value);
        }
    }





    return(<div style={{textAlign:"center"}}>
    <div>
<h1>React Calculator</h1>
        <input type='text' value={input} readOnly style={{tabSize:"50px"}}/>
        <div>{result}</div>
        </div>
        <div>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('7')}}>7</button>
            <button style={{padding:"10px" , borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('8')}}>8</button>
            <button style={{padding:"10px" , borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('9')}}>9</button>
            <button style={{padding:"10px" , borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('+')}}>+</button>
        </div>
        <div>
            <button style={{padding:"10px" , borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('4')}}>4</button>
            <button style={{padding:"10px" , borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('5')}}>5</button>
            <button style={{padding:"10px" , borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('6')}}>6</button>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('-')}}>-</button>
        </div>
        <div>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('1')}}>1</button>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('2')}}>2</button>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('3')}}>3</button>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('*')}}>*</button>
        </div>
        <div>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('C')}}>C</button>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('0')}}>0</button>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('=')}}>=</button>
            <button style={{padding:"10px", borderRadius:"10px", margin:"10px", fontSize:"40px"}} onClick={()=>{handleButtonClick('/')}}>/</button>
        </div>
        
        </div>)
}
export default Calcultor;