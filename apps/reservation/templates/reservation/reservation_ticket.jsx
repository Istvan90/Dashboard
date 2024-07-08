import "./Style/style.css"

const reservationList = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/reservation/ticket/${id}`)
      .then(response => {
        setReservation(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurants!', error);
      });
  }, [id]);

  <div className="reserve-body">
    <div className="confirmation-card">
      <h2 className="confirmation-title">Félicitations, votre réservation a été confirmée !</h2>
      <p className="confirmation-message">Le Bistrot Parisien vous attend pour le 15 juin 2023 à 20h00</p>
      <h3 className="ticket-title">Voici votre ticket</h3>
      <img src="https://websim.ai/qr-code/reservation-12345.png" className="card-img-top"
        alt="QR Code de réservation pour Le Bistrot Parisien" />
      <a href="https://websim.ai/reservations" className="btn">Ok</a>
    </div>
  </div>
}

export default reservationList;