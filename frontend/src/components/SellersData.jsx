import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SellersData = () => {
  const [partnerData, setPartnerData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPartnerData = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('accessToken');
        
        if (!token) {
          throw new Error('Token not found');
        }

        // Make request to fetch partner data
        const response = await axios.get('http://localhost:4000/getPartnerByToken', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setPartnerData(response.data.partner);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error.response?.data?.message || 'An error occurred');
        setLoading(false);
      }
    };

    fetchPartnerData();
  }, []);


  return (
    <div>
      <div className='mx-auto flex flex-col justify-center items-center gap-4 my-6'>
        <img src="https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png" alt="" width={100} className='rounded-full' />
        <p className='text-2xl font-bold'>Hi {partnerData.name}</p>
      </div>

      <div className='flex justify-center items-center'>
        <div>
          <p className='text-3xl text-[#33cc33] text-center font-semibold'>Orders in Your Locality</p>

          {/* Card */}
          <div className='border w-fit px-8 rounded-md border-[#33cc33] shadow-lg shadow-[#33cc33] py-4 flex flex-col gap-4 my-12'>
            <p>Seller Name : <span>Vikram</span></p>
            <p>Phone Number : <span>7419035248</span></p>
            <p>City : <span>Panipat</span></p>
            <p>Description : <span>Plastic</span></p>
            <div>
              <button className='border px-4 py-2 rounded-md bg-[#33cc33] text-white'>Collected</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellersData;
