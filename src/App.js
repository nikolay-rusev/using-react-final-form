import React from "react";
import { Form, Field } from "react-final-form";

const onSubmit = (values) => {
  window.alert(JSON.stringify(values, 0, 2));
};

export default function App() {
  return (
    <div style={{ padding: 15, margin: "auto", maxWidth: 600 }}>
      <h2>Gravity Well Application Employment Form</h2>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}
