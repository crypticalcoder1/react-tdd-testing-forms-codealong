import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState('small'); // Added state for size
  const [contactInfo, setContactInfo] = useState(''); // Added state for contact info

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);
  const handleSizeChange = (e) => setSize(e.target.value);
  const handleContactChange = (e) => setContactInfo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h1>Place an Order</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>
        <div>
          <label htmlFor="size">Size</label>
          <select
            id="size"
            value={size}
            onChange={handleSizeChange}
            aria-label="size"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-info">Contact Info</label>
          <input
            type="text"
            id="contact-info"
            value={contactInfo}
            onChange={handleContactChange}
            aria-label="contact info"
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default App;
