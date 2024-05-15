import {React,useState} from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from "axios";
const BookingForm = () => {
  const [firstname,setfirstname]=useState("")
  const [lastname,setlastname]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [formaddress,setformaddress]=useState("")
  const [toaddress,settoaddress]=useState("")
  const [message,setmessage]=useState("")
  const [success,setsuccess]=useState("")
  const [error,seterror]=useState("")

  const submitHandler = (event) => {
    event.preventDefault();
  };
  const onsubmit=async(e) =>{
    e.preventDefault();
    try {     
    const res=await axios.post("http://www.localhost:4000/form//register",{
    firstname:firstname,
    lastnamename:lastname,
    email:email,
    phone:phone,
    formaddress:formaddress,
    toaddress:toaddress,
})
// setsuccess(res.data)
// setTimeout(() => {
//   navigate('/login')
// }, 2000);
alert("form submit")

}
catch (error) {
seterror(error.response.data)

}}




  return (
    <Form onSubmit={onsubmit}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name"onChange={(e)=>setfirstname(e.target.value)} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name"onChange={(e)=>setlastname(e.target.value)} />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email"onChange={(e)=>setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" onChange={(e)=>setformaddress(e.target.value)}/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" onChange={(e)=>settoaddress(e.target.value)}/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>
      {/* <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup> */}

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        >
        </textarea>
      </FormGroup>
      <button type="submit">submit</button>

    </Form>
  );
};

export default BookingForm;
