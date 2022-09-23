import { useEffect, useState } from "react";


const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ''; 
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailInvalid = !enteredEmailIsValid && enteredEmailTouched;
  
  
  useEffect(() => {
    if(enteredNameIsValid && enteredEmailIsValid){
      setFormIsValid(true);
    }else{
      setFormIsValid(false);
    }
  },[enteredNameIsValid, enteredEmailIsValid])  
   
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value); 
    // if(enteredName.trim() !== ''){
    //   setEnteredNameIsValid(true); 
    // } 
  }
  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value); 
     
  }
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    // if(enteredName.trim() === ''){
    //   setEnteredNameIsValid(false);  
    // }
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
     
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true); 

    // if(enteredName.trim() === ''){
    //   setEnteredNameIsValid(false); 
    //   return; 
    // }
    if(!enteredNameIsValid){
      return;
    }
    // setEnteredNameIsValid(true);
    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value="";

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  // const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = enteredEmailInvalid  ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
            // ref={nameInputRef} 
            type='text' 
            id='name' 
            onChange={nameInputChangeHandler} 
            onBlur={nameInputBlurHandler}
            value={enteredName}
        />
         {/* {!enteredNameIsValid && <p className="error-text">Name must be not be empty.</p> }  */}
         { nameInputIsValid && <p className="error-text">Name must be not be empty.</p> }  
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input 
            // ref={nameInputRef} 
            type='email' 
            id='email' 
            onChange={emailInputChangeHandler} 
            onBlur={emailInputBlurHandler}
            value={enteredEmail}
        />
         {/* {!enteredNameIsValid && <p className="error-text">Name must be not be empty.</p> }  */}
         { enteredEmailInvalid && <p className="error-text">Please Enter Valid Eamil</p> }  
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
