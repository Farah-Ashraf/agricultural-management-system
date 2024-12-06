import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import * as Yup from 'yup';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import '../App.css';
import logo from '../assets/images/logo.png'; // Adjust the path to your logo


const Signin = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log("Form Submitted", values);
      alert("Sign-In Successful");
    } catch (error) {
      console.error("Error during sign-in:", error);
      alert("Error during sign-in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (

    
      <div>

        <div className=' logo-div'>
                <img className=' logo-img' src={logo}/>
        </div>

        <div className="signin-wrapper">
      {/* Left Section for Social Sign-In */}
      <div className="left-section">
        <h2>Welcome Back!</h2>
        <p>Sign in to your account</p>
        <div className="social-buttons">
          <button className="social-btn facebook">
            <FaFacebook size={20} /> Sign in with Facebook
          </button>
          <button className="social-btn twitter">
            <FaTwitter size={20} /> Sign in with Twitter
          </button>
          <button className="social-btn google">
            <FaGoogle size={20} /> Sign in with Google
          </button>
          <button className="social-btn instagram">
            <FaInstagram size={20} /> Sign in with Instagram
          </button>
        </div>
      </div>

      {/* Right Section for the Sign-In Form */}
      <div className="right-section">
        <h1>Sign In</h1>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Username Field */}
              <div className="form-group">
                <Field name="username" placeholder="Username" />
                <ErrorMessage name="username" component="div" className="error" />
              </div>

              {/* Password Field */}
              <div className="form-group">
                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                Sign In
              </button>
              <p className=' py-3'>Forgot your password? <a href='' className=' text-success d-inline text-decoration-none'>Reset here</a></p>
            </Form>
          )}
        </Formik>
      </div>
        
        </div>

        <div className=' login-here-div'>
             <p className=' m-auto p-3'>Don't have any Account?       
             <Link to="/signup"> Register here</Link> 
             </p>
        </div>



      </div>

  );
};

export default Signin;