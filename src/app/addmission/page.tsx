// src/app/about/page.tsx
import Link from 'next/link';
import React from 'react';

const Admission = () => {
  return (
    <div>
      <h1 style={{textAlign:'center', color:'rgb(103,103,255)',fontSize:'40px',fontFamily:'Times New Roman, Times, serif',margin:'20px'}}>Admission Form</h1>
      <fieldset>
        <fieldset id='fieldset0'>
        <legend>Personal Information</legend>
        <form>
          {/* Name field */}
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name0" placeholder="Name" />
          <br /><br />

          {/* Father Name field */}
          <label htmlFor="fatherName">Father Name</label>
          <br />
          <input type="text" id="fatherName" placeholder="Father Name" />
          <br /><br></br>

          {/* Mother Name field */}
          <label htmlFor="motherName">Mother Name</label><br />
          <input type="text" id="motherName" placeholder="Mother Name" />
          <br /><br></br>
          <label htmlFor="address">Address</label><br />
          <input type="address" id="address" placeholder="Address" /><br />
        </form>
        </fieldset>
        <fieldset id='fieldset0'>
        <legend>Academic Information</legend>
        <form>
          {/* Class field */}
          <label htmlFor="class">LAST  CLASS PASSED</label>
          <br />
          <label htmlFor="grade"></label>
          <br />
          <select id="Last Class Passed" name="grade">
            <option value="">--Select--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4"> 4</option>
            <option value="5"> 5</option>
            <option value="6"> 6</option>
            <option value="7"> 7</option>
            <option value="8"> 8</option>
            <option value="9"> 9</option>
          </select>
          <br /><br />
          <label htmlFor="whichschool">FROM WHICH SCHOOL</label><br></br>
          <input type="text" id="whichschool" placeholder="School Name" />
          <br></br>
          <br></br>
          <label htmlFor="TAKECLASS">APPLY FOR CLASS</label><br></br>
          <input type="text" id=" TAKECLASS" placeholder="Class" />
        </form>
        </fieldset>
        <fieldset id='fieldset0'>
        <legend>FOR DOCUMENTATION</legend>
        <form>
         <label htmlFor="CNIC">STUDENT B-FORM NUMBER</label><br></br>
         <input type='CNIC' id='B-form' placeholder='B-form number'/><br></br><br></br>
         <label htmlFor='date'>DATE OF BIRTH</label><br></br>
         <input type='date' id='date' placeholder='Date of Birth'/><br></br><br></br>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id="email" placeholder="Email" />
          <br /><br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input type="tel" id="phone" placeholder="Phone" /><br></br><br></br>
          <label htmlFor="CNIC">Gurdian  CNIC</label><br></br>
        <input type="CNIC" id="CNIC" placeholder="CNIC" /><br></br><br></br>
        <label  htmlFor='tel' id='tel'>Gurdian Phone</label><br></br>
        <input type="tel" id="tel" placeholder="Phone" /><br></br>
        </form>
        </fieldset>
        <h2>Procedure after submission</h2>
        <ul>
         
          <li>Came school for the test.</li>
          <li>Pay the test fee.</li>
          <li>Only B-form and Gurdian CNIC is required for test.</li>
          <li>Once the test is completed, you will receive a result.</li>
          <li>Then, you can apply for admission by visiting school with all documents orignial.</li>
          <li>All documents that submitted in  form must be original and 2  photocopies for  each.</li>
        </ul>
    
        <button style={{marginLeft:'300px'}}>Submit</button>
      </fieldset>
    </div>
  );
};

export default Admission;
