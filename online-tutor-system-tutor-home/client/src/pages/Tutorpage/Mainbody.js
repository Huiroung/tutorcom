import React from 'react';
import './mainbody.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Mainbody() {
  return (
    <div className='body-container'>
        <section className='body1'>
        <p className='body-heading'>
          Please click the below button to edit your information / Profiles
        </p>
        <div className='input-areas'>
          <form>
            <Button buttonStyle='btn--outline'>Edit</Button>
          </form>
        </div>
      </section>
      <div class='body2'>
        <div className='body2-wrapper'>
          <div class='body2-items'>
            <h2>Rating</h2>
            <p>Communication</p>
            <p>Passion</p>
            <p>Time Management</p>
            <p>Teaching Skills</p>
            
          </div>
          <div class='body2-items'>
            <h2>About</h2>
            <p>User Id :</p>
            <p>Name :</p>
            <p>Email :</p>
            <p>Phone Number :</p>
            <p>Date of Birth :</p>
            <p>Address : </p>

            
          </div>
        </div>
        <div className='body2-wrapper'>
          <div class='body2-items'>
            <h2>Academic BackGround</h2>
            <p>Subjects</p>
            <p>Education</p>
            <p>Experience</p>
            
          </div>
          
      </div>
      
    </div>
    </div>
  );
}

export default Mainbody;