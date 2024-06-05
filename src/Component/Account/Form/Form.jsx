import * as React from 'react';
import Box from '@mui/material/Box';
import "./Form.css"
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Buttons from '../../Button'

export default function Form() {

  const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '' });
  const [errors, setErrors] = useState({ name: '', email: '', phoneNumber: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^[0-9\b]+$/;
    return re.test(phoneNumber);
  };

  const handleSubmit= (e) => {
    e.preventDefault(); // Prevent default form submission
    let validationErrors = {};
    let isValid = true;

    // Validate form inputs
    if (formData.name.trim() === '') {
       validationErrors.name = 'Please enter your name.';
       
      isValid = false;
    }

    if (!validateEmail(formData.email)) { 
      validationErrors.email = 'Please enter a valid email address.';
      isValid = false;
      
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      validationErrors.phoneNumber = 'Please enter a valid phone number.';
      isValid = false;
    }

    setErrors(validationErrors);

    if (isValid) {
      // Store data in local storage
      const storedData = JSON.parse(localStorage.getItem('formData')) || [];
      storedData.push(formData);
      localStorage.setItem('formData', JSON.stringify(storedData));

      // Optionally, you can clear the form after submission
      setFormData({ name: '', email: '' ,phoneNumber:''});

      alert('Form submitted successfully!');
    }
  };
  return (
    <Box className='Form'
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      
      noValidate
      autoComplete="off"
    >
  
        <div className="">
          

      <FormControl id="box" error={!!errors.name}>
        <InputLabel id="box1"  htmlFor="component-simple" >Name</InputLabel>
        <OutlinedInput
         id="component-outlined" 
        label="Name"
        name="name"

        value={formData.name}
        onChange={handleChange}
        required
         />
          {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
      </FormControl>

      <FormControl id="box" >
        <InputLabel id="box1"  htmlFor="component-helper"> Display Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Display Name"
        />
      
      </FormControl>
      </div>
      <div className="">
      <FormControl  id="box" error={!!errors.email}>
        <InputLabel id="box1" htmlFor="component-simple" >Email</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        //   aria-describedby="component-helper-text"
        />
         {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
      </FormControl>


      <FormControl id="box"  error={!!errors.phoneNumber}>
        <InputLabel id="box1"  htmlFor="component-outlined">Phone Number</InputLabel>
        <OutlinedInput className='box1'
          id="component-outlined"
          label="Phone Number"
          type='tel'
          name="phoneNumber"
          value={formData.phoneNumber}
          inputProps={{ maxLength: 10 }} 
          onChange={handleChange}
        />
        {errors.phoneNumber && <FormHelperText>{errors.phoneNumber}</FormHelperText>}

      </FormControl>
     </div>
           <Buttons type="submit" content="Submit"/>
    
      
      
    
    </Box>
  );
}

