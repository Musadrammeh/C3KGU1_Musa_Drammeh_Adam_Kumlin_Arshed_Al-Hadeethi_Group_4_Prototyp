function ConfirmationMessage(props) {
    // Komponenten tar emot props.
    
      if (!props.bookedHotel) {
      // Om state-variabeln "chosenHotel" inte har något värde, alltså om något hotell inte har valts än.
    
        return <div></div>;
        // Returnerar en tom div.
    
      } else {
          
          return (
            <div className="ConfirmationMessage">
                <h1> Thank you for your booking!</h1>

                <h2>Booking details</h2>
                <ul>
                    <li>Name: {props.customerName}</li>
                    <li>Phone number: {props.customerPhone}</li>
                    <li>E-mail: {props.customerEmail}</li>
                    <li>You have chosen: {props.paymentMethod}</li>
                    <li>Amount paid: ${props.totalPrice}</li>
                </ul>

                <h2>Hotel details</h2>
                <ul>
                    <li>Hotel name: {props.bookedHotel.hotelName}</li>
                    <li>Hotel destination: {props.bookedHotel.destination}</li>
                    <li>Guests: {props.chosenGuestAmount}</li>
                    <li>Check-in date: {props.chooseCheckInDate}</li>
                    <li>Check-out date: {props.chooseCheckOutDate}</li>
                </ul>
            </div>
            // Renderar en div med en h1-titel, en h2-titel, en ul-lista och en knapp. Dessa element fylls med information om hotellen med props.
          )
        }
      }
      
      export default ConfirmationMessage;
      // Exporterar komponenten som "ConfirmationMessage".