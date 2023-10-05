import React from 'react'

const login = () => {
  return (
    <div>
        <div class="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            <button type="submit">Login</button>   
            <input type="checkbox" checked="checked"/> Remember me   
            <button type="button" class="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>   
        </div>  
    </div>
  )
}

export default login
