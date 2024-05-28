import React, { useState } from "react";
import Joi from "joi";
import "./styles/artboardSize.css";
import { useDesignContext } from "../context/DesignContext";

const schema = Joi.object({
  width: Joi.number().min(0).max(5000).required().label("Width"),
  height: Joi.number().min(0).max(5000).required().label("Height"),
});

function ArtboardSize() {
  const { setStageSize } = useDesignContext();
  const [form, setForm] = useState({
    width: null,
    height: null,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const { error } = schema.validate(form, { abortEarly: false });
    if (!error) return null;

    const validationErrors = {};
    for (let item of error.details)
      validationErrors[item.path[0]] = item.message;
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors || {});
    if (validationErrors) return;

    // Form submission logic
    setStageSize(form);
    console.log("Form submitted successfully", form);
  };

  return (
    <>
      <div className="modal-container row d-flex align-items-center justify-content-center">
        <div className="col-lg-8 py-5 bg-light rounded border">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <h1>Artboard Size</h1>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="needs-validation row d-flex align-items-center justify-content-center mt-4"
            noValidate
          >
            <div className="col d-flex align-items-center justify-content-center">
              <div className="row">
                <div className="col">
                  <label htmlFor="width" className="form-label">
                    Width
                  </label>
                  <input
                    type="number"
                    id="width"
                    name="width"
                    className="form-control"
                    value={form.width}
                    onChange={handleChange}
                    placeholder="Width"
                    required
                  />
                  {errors.width && <div className="error">{errors.width}</div>}
                </div>

                <div className="col">
                  <label htmlFor="height" className="form-label">
                    Height
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    className="form-control"
                    value={form.height}
                    onChange={handleChange}
                    required
                    placeholder="Height"
                  />
                  {errors.height && (
                    <div className="error">{errors.height}</div>
                  )}
                </div>
                <div className="col d-flex align-items-end justify-content-start">
                  <button type="submit" className="btn btn-danger">
                    Create +
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ArtboardSize;
