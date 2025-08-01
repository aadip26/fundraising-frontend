fetch('http://localhost:5000/api/intern')
  .then(response => response.json())
  .then(data => {
    document.getElementById('internName').textContent = data.name;
    document.getElementById('referralCode').textContent = data.referralCode;
    document.getElementById('donationAmount').textContent = data.totalDonations;
  })
  .catch(err => console.error('Failed to fetch data:', err));
