import { useState } from 'react';
import "../../assets/Css/table.css";

const initialFormData = {
  title: '',
  name: '',
  price: '',
  validity: '',
  calls: '',
  sms: ''
};

const initialAddonData = [
  {
    title: 'Data Add-ons',
    plans: [
      { name: '1GB', price: '5', validity: 1, calls: 'NA', sms: 'NA' },
      { name: '5GB', price: '15', validity: 7, calls: 'NA', sms: 'NA' },
      { name: 'Unlimited 1 Day', price: 10, validity: 1, calls: 'NA', sms: 'NA' }
    ]
  },
  {
    title: 'Combo Add-ons',
    plans: [
      { name: 'Data + Talktime', price: '2', validity: 10, calls: '500 minutes', sms: 'NA' },
      { name: 'Talktime + SMS', price: '25', validity: 15, calls: 'NA', sms: '100 SMS/day' },
      { name: 'All-in-One', price: '35', validity: 30, calls: 'Unlimited', sms: 'Unlimited' }
    ]
  },
  {
    title: 'Validity Extension Add-ons',
    plans: [
      { name: '7 Days', price: '5', validity: 7, calls: 'NA', sms: 'NA' },
      { name: '14 Days', price: '10', validity: 14, calls: 'NA', sms: 'NA' },
      { name: '30 Days', price: '15',  validity: 30, calls: 'NA', sms: 'NA' }
    ]
  }
];

export default function AddOnView() {
  const [formData, setFormData] = useState(initialFormData);
  const [addonData, setAddonData] = useState(initialAddonData);
  const [selectedAddonCategory, setSelectedAddonCategory] = useState('Data Add-ons');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, name, price, validity, calls, sms } = formData;
    const newAddon = { name, price, validity, calls, sms };

    const updatedAddonData = addonData.map(category => {
      if (category.title === title) {
        return {
          ...category,
          plans: [...category.plans, newAddon]
        };
      }
      return category;
    });

    setAddonData(updatedAddonData);
    setFormData(initialFormData);
  };

  return (
    <div style={{color:'white'}} className="admin-add-on-container">
      <div className="add-on-form">
        
<form style={{color:'black'}} onSubmit={handleSubmit}>
<center><div className='form-data'>
  <input type="text" placeholder='Title' name="title" value={formData.title} onChange={handleInputChange} />
  <input type="text" placeholder='Data' name="name" value={formData.name} onChange={handleInputChange} />
  <input type="text" placeholder='Price' name="price" value={formData.price} onChange={handleInputChange} />
  <input type="text" placeholder='Validity' name="validity" value={formData.validity} onChange={handleInputChange} />
  <input type="text" placeholder='Calls' name="calls" value={formData.calls} onChange={handleInputChange} />
  <input type="text" placeholder='SMS' name="sms" value={formData.sms} onChange={handleInputChange} />
   <br></br>
  <button type="submit"><b>Add Addon</b></button></div></center>
</form>
      </div>
      <div className="add-on-existing">
        <div className='types' >
          <button className='types-but' onClick={() => setSelectedAddonCategory('Data Add-ons')}><b> Data Add-ons </b></button>
          <button className='types-but' onClick={() => setSelectedAddonCategory('Combo Add-ons')}><b>Combo Add-ons</b></button>
          <button className='types-but' onClick={() => setSelectedAddonCategory('Validity Extension Add-ons')}><b>Validity Extension Add-ons</b></button>
        </div>
        
        <ul>
          {addonData.map((category, index) => {
            if (category.title === selectedAddonCategory) {
              return (
                <div className='add-on-2' key={index}>
                  {category.plans.map((plan, i) => (
                    <div className='add-on-whole-2' key={i}>
                 <div className='add-on-top-2'>
                 <div style={{display:'flex'}}><b>{plan.price}₹</b></div>
                 <div><p>Data</p>
                      <p>Validity</p>
                 </div>
                 <div className='add-on-top-right-2'>
                 <p>{plan.name}</p>
                 <p>{plan.validity}</p>
                 </div>
                 <div></div>
                 </div>
                 <div className='add-on-bottom-2'>
                 <p>{category.title} Data:{plan.name} | SMS:{plan.sms} | Calls:{plan.calls}</p>
                 </div>

                </div>
                  ))}
                </div>
              );
            }
            return null;
          })}
        </ul>
      </div>
    </div>
  );
}