import "./ReservationCSS/style.css"

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

  <div class="confirmation-card">
    <h2>Félicitations, votre réservation a été confirmée !</h2>
    <p>Le Bistrot Parisien vous attend pour le 15 juin 2023 à 20h00</p>
    <h3>Voici votre ticket</h3>
    <img src="https://websim.ai/qr-code/reservation-12345.png" class="card-img-top"
      alt="QR Code de réservation pour Le Bistrot Parisien" width="200" height="200" />
    <a href="https://websim.ai/reservations" class="btn">Ok</a>
  </div>
}

export default reservationList;