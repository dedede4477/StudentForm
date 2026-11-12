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
    setEntries((prev) => [...prev, formData]);
    setFormData({ name: "", email: "", course: "" });
    setErrors({});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4" style={{ width: "300px" }}>
        <input className="border" name="name" value={formData.name} onChange={handleChange} />
        <input className="border" name="email" value={formData.email} onChange={handleChange} />
        <select className="border" name="course" value={formData.course} onChange={handleChange}>
          <option value="">Select a course</option>
          <option value="react">React</option>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Submit
        </button>
      </form>
      <div>
      {entries.map((entry, index) => (
        <div key={index}>
          <p>{entry.name}</p>
          <p>{entry.email}</p>
          <p>{entry.course}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default App     