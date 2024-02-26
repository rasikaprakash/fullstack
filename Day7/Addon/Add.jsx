import { useState } from 'react';
import addonData from './AddonData';
import '../../assets/Css/addon.css';
const AddOn = () => {
  const [activeTab, setActiveTab] = useState('Recharge Plans');

  const handleTabClick = (title) => {
    setActiveTab(title);
  };

  return (
    <div>
        <br /><br /><br />
      <div className="tabs">
        {addonData.map((category, index) => (
          <div
          style={{color:'white'}}
            key={index}
            className={category.title === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(category.title)}
          >
            {category.title}
          </div>
        ))}
      </div>
          <div id="back-col">
      <div className="plans">
        {addonData.map((category, index) => (
          <div key={index} style={{color:'black', display: category.title === activeTab ? 'block' : 'none' }}>
            <ul><center> <div className='add-on-card'>
              {category.plans.map((plan, idx) => (
                <div className='add-on-whole' key={idx}>
                 <div className='add-on-top'>
                 <div style={{display:'flex'}}><b>{plan.price}₹</b></div>
                 <div><p>Data</p>
                      <p>Validity</p>
                 </div>
                 <div className='add-on-top-right'><p>{plan.name}</p>
                      <p>{plan.validity}</p>
                 </div>
                 <div></div>
                 </div>
                 <div className='add-on-bottom'>
                 <p>{category.title} Data:{plan.name} | SMS:{plan.sms} | Calls:{plan.calls}</p>
                 </div>

                </div>
              ))}</div></center> 
            </ul>
            </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default AddOn;