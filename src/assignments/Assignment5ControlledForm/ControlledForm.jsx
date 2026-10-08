import { useState } from "react";
import "./ControlledForm.css";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="controlled-form-page">

      {/* Form Card */}

      <div className="controlled-form-card">

        <div className="form-header">
          <span className="form-badge">
            ASSIGNMENT 05
          </span>

          <h2>Controlled React Form</h2>

          <p>
            Enter your details and see the data update
            in real time.
          </p>
        </div>


        {/* Form */}

        <form>

          {/* Name */}

          <div className="form-group">

            <label htmlFor="name">
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

          </div>


          {/* Email */}

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

          </div>


          {/* Phone */}

          <div className="form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />

          </div>


          {/* Course */}

          <div className="form-group">

            <label htmlFor="course">
              Course
            </label>

            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            >

              <option value="">
                Select your course
              </option>

              <option value="MCA">
                MCA
              </option>

              <option value="BCA">
                BCA
              </option>

              <option value="MBA">
                MBA
              </option>

              <option value="B.Tech">
                B.Tech
              </option>

            </select>

          </div>

        </form>


        {/* Live Preview */}

        <div className="live-preview">

          <div className="preview-header">
            <h3>Live Preview</h3>

            <span>
              LIVE
            </span>
          </div>


          <div className="preview-content">

            <div className="preview-row">
              <strong>Name:</strong>
              <span>
                {formData.name || "Not entered"}
              </span>
            </div>

            <div className="preview-row">
              <strong>Email:</strong>
              <span>
                {formData.email || "Not entered"}
              </span>
            </div>

            <div className="preview-row">
              <strong>Phone:</strong>
              <span>
                {formData.phone || "Not entered"}
              </span>
            </div>

            <div className="preview-row">
              <strong>Course:</strong>
              <span>
                {formData.course || "Not selected"}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ControlledForm;