// NEW (use your Render backend URL):

fetch('https://fundraising-backend.onrender.com/api/intern')  .then(response => response.json())
  .then(data => {
    document.getElementById('internName').textContent = data.name;
    document.getElementById('referralCode').textContent = data.referralCode;
    document.getElementById('donationAmount').textContent = data.totalDonations;
  })
  .catch(err => console.error('Failed to fetch data:', err));
