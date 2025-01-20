import {useState} from 'react'
import Footer from "../components/Footer";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const validate= () =>{
        const newErrors={};

        if(!formData.name.trim()){
            newErrors.name="Name is required";
        }
        if(!formData.email.trim() || !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
            newErrors.email="Email is required and must be a valid email address";
        }
        if(!formData.message.trim()){
            newErrors.message="Message is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if(validate()){
            alert(`form Submitted Successfully:\nName: ${formData.name}\n Email: ${formData.email}\n Message: ${formData.message}`)
            setFormData({
                name: '',
                email: '',
                message: ''
            });
            setErrors({});
        }
    }
  return (
    <div className="container mt-5">
    <h2 className="text-center mb-4">Contact Us</h2>
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message:</label>
        <textarea
          id="message"
          name="message"
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
    <Footer />
  </div>
  )
}
