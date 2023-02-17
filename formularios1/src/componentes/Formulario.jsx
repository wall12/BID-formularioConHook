const Formulario = (props) => {

    const {entrada, setEntrada} = props;
    const change = (e) => {setEntrada ({
        ...entrada,
      [e.target.name]: e.target.value
      
      }
    );
} 
    return (
      <>
        <form>
            <div className='Formulario'>
              <label>Name</label>
              <input type="text" name="name" onChange={change} value= {entrada.name}/>
            </div>
            
            <div>
              <label>Last Name</label>
              <input type="text" name= "lastName" onChange={change} value= {entrada.lastName} />
            </div>
           
            
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name= "email" onChange={change} />
            </div>
           
            
            
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name= "password" onChange={change} />
            </div>
            
            
          
            <div>
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name= "confirmPassword" onChange={change} />
            </div>
            
        </form>
      </>
    )
  }
  
  export default Formulario