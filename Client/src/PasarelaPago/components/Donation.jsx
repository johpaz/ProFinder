import { useState } from 'react';
import './Donation.css';
import { initMercadoPago,Wallet} from '@mercadopago/sdk-react'
import axios from 'axios';

const MercadoPagoForm = () => {
  const [donationAmount, setDonationAmount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(1);

  const [preferenceId, setPreferenceId]= useState(null)
  initMercadoPago('TEST-1094906479210663-070610-3a99b74510b6734630d8c8023163820f-5708218');

  const handleDonationChange = (donationAmount) => {
    setDonationAmount(donationAmount);
    setTotalAmount(donationAmount*1)
  };

  const handleDonate = (e) => {
    setDonationAmount(e.target.value);
    setTotalAmount(e.target.value*1);
 };

 // Mercado pago funtions

 const createPreference = async () =>
{
    try{
        const response = await axios.post('http://localhost:3001/cash',{
            description: "Gracias por los Cafesitos",
            price: totalAmount,
            quantity:1,
        });
        console.log(response);
        const {id} = response.data;
        console.log(id);
        return id;
        }catch(error){
            console.log(error.message);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }console.log(id);
    }


    return (
    <div className="mercado-pago-form">
      <h2>Ayúdame con un Café</h2>
      <div className="donation-buttons">
            <button type="button" className="donate-button" onClick={()=>handleDonationChange(3)}>
            😁 ☕ x3
            </button>
            <button type="button" className="donate-button" onClick={()=>handleDonationChange(5)}>
            
            😁 ☕ x5
            </button>
            <button type="button" className="donate-button" onClick={()=> handleDonationChange(10)}>
            😁 ☕ x10
            </button>
       </div>
        <div className="input-container">
            <button className="decrement-button"  onClick={() => { if (donationAmount > 1) {handleDonationChange(donationAmount - 1);} }}>-</button>
                <button className="increment-button" onClick={() => handleDonationChange(donationAmount + 1)}>+</button>
                
                <input
                    className="donate-input"
                    type="number"
                    min="1"
                    value={donationAmount}
                    onChange={handleDonate}
                />
            
                <p className="donate-amount">
                    Invitame {donationAmount} {donationAmount === 1 ? "Cafesito $" : "Cafesitos $"} {totalAmount}❣
                </p>
        </div>

        <div>
        <button className="donate-button" onClick={handleBuy}>Paga</button>
        {preferenceId &&  <Wallet initialization={{ preferenceId}} />}
        </div>

    </div>
  );
};

export default MercadoPagoForm;
