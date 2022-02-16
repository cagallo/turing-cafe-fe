const apiCalls = {
 getReservationData = async() => {
    let response = await fetch('http://localhost:3001/api/v1/reservations');
    return await response.json();
  }
};






export default apiCalls;