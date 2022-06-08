import React, {useState} from 'react';
import './product.css'
function Product() {
    
  const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }

  return(
      <div className="form">
          <div className="form-body">
              <div className="username">
              <label className="form__label" for=" Level">Level </label>
              <span></span>
                  <select name="Find us" id="Find us">
							<option value="100 level" selected>100</option>
							<option value="200 level">200</option>
							<option value="300 level">300</option>
							<option value="400 level">400</option>
						</select>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Semester</label>
                  <select name="Find us" id="Find us">
							<option value="alpha" selected>alpha</option>
							<option value="omega">omega</option>
						</select>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Submit</button>
          </div>
      </div>      
    )       
}
export default Product;