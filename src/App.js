import React from "react";
import { Form, Field } from "react-final-form";
// React Final Form's onSubmit event handler.
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
            <h3>Personal</h3>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <h3>Current Employment</h3>
              <label>Are you Employed</label>
              <Field name="employed" component="input" type="checkbox" />
            </div>
            <div>
              <h3>Work Desired</h3>
              <div>
                <label>Full-time</label>
                <Field
                  name="work"
                  component="input"
                  type="radio"
                  value="Full-time"
                />
                <label>Part-time fixed hours</label>
                <Field
                  name="work"
                  component="input"
                  type="radio"
                  value="Part-time fixed hours"
                />
                <label>Part-time on-demand</label>
                <Field
                  name="work"
                  component="input"
                  type="radio"
                  value="Part-time on-demand"
                />
              </div>
            </div>
            <div>
              <h3>Languages/Frameworks</h3>
              <div>
                <Field
                  name="languages"
                  component="input"
                  type="checkbox"
                  value="React"
                />
                <label>React</label>
                <Field
                  name="languages"
                  component="input"
                  type="checkbox"
                  value="Angular"
                />
                <label>Angular</label>
                <Field
                  name="languages"
                  component="input"
                  type="checkbox"
                  value="csharp"
                />
                <label>C#</label>
                <Field
                  name="languages"
                  component="input"
                  type="checkbox"
                  value="nodejs"
                />
                <label>nodejs</label>
              </div>
            </div>
            <div>
              <h3>Position Desired</h3>
              <div>
                <Field
                  name="position"
                  component="input"
                  type="checkbox"
                  value="Front-End"
                />
                <label>Front-End</label>
                <Field
                  name="languages"
                  component="input"
                  type="checkbox"
                  value="Back-End"
                />
                <label>Back-End</label>
                <Field
                  name="languages"
                  component="input"
                  type="checkbox"
                  value="fullstack"
                />
                <label>Full-Stack</label>
              </div>
            </div>

            <div>
              <h3>Work Location</h3>
              <Field name="worklocation" component="select">
                <option />
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
                <option value="Combination">Combination</option>
              </Field>
            </div>
            <h3>Submit when complete</h3>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}
