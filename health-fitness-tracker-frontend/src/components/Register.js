import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Register.css'; // Assuming you have a separate CSS file for Register
import Auth from '../context/AuthContext';

function Register() {
  const { register } = useContext(Auth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await register(name, email, password);
      if (data && data.msg) {
        alert(data.msg);
      }
      navigate('/dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="h-100 gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-md-10 col-sm-12"> {/* Adjusted responsive columns */}
            <div className="card rounded-3 text-black shadow-lg" style={{ padding: '2.5rem' }}> {/* Increased padding for larger card */}
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h4 className="mt-1 mb-5 pb-1">Create Your Account</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {error && <p className="text-danger">{error}</p>} 

                      <p>Please register to create an account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="formName"
                          className="form-control"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          aria-label="Full Name"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="formEmail"
                          className="form-control"
                          placeholder="Email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          aria-label="Email address"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="formPassword"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          aria-label="Password"
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 hover-effect"
                          type="submit"
                        >
                          Register
                        </button>
                        <a className="text-muted" href="#!">Already have an account?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <Link to="/login" className="btn btn-link text-danger">Log in</Link>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">Join Our Community</h4>
                    <p className="small mb-0">
                      Discover a healthier you! Join our fitness tracking community and achieve your health goals with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
