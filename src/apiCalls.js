const apiCalls = {
  async getReservationData() {
    let response = await fetch('http://localhost:3001/api/v1/reservations');
    return await response.json();
  },

  async postReservation(resy) {
  let response = await fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify(resy),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await response.json();
  }
  
};






export default apiCalls;