import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  })
  const [errors, setErrors] = useState({});
  const [entries, setEntries] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email.";
    if (!formData.course) newErrors.course = "Choose a course.";
    return newErrors;
  };
    const handleSubmit = (e) => {
e.preventDefault();
const validationErrors = validate();
if (Object.keys(validationErrors).length > 0) {
setErrors(validationErrors);
return;
}
setEntries((prev) [...prev, formData]);
setFormData({ name: "", email: "", course: });
setErrors({});
};
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
      <select name="course" value={formData.course} onChange={handleChange}>
        <option value="">Select a course</option>
        <option value="react">React</option>
        <option value="javascript">JavaScript</option>
        <option value="typescript">TypeScript</option>
      </select>
      <button type="submit">Submit</button>
      </form>
    </div>


  )
}

export default App