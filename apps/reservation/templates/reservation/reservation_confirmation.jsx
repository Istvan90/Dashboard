const reservationConfirmation = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/reservation/confirmation/')
      .then(response => {
        setReservation(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurants!', error);
      });
  }, [id]);

  <div class="container">
    <h1>Confirmation de Réservation</h1>
    <p>Votre réservation pour {reservation.number_of_people} personnes à {reservation.restaurant.name}
      a été enregistrée.</p>
    <p>
      <strong>Date:</strong> {reservation.reservation_date}
    </p>
    <p>
      <strong>Heure:</strong> {reservation.reservation_time}
    </p>
    <p>
      <strong>Demandes spéciales:</strong> {reservation.special_requests}
    </p>
    <p>
      <strong>Statut:</strong> {reservation.get_status_display}
    </p>
    <a href="{% url 'reservation-ticket' reservation.pk %}">Confirmer</a>
    <a href="{% url 'reservation-pending' reservation.pk %}">Annuler</a>
  </div>
}

export default reservationConfirmation;