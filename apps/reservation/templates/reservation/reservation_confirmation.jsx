import "./Style/reservation_confirmation.css"

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

  <div className="container">
    <h1 className="reservation-title">Confirmation de Réservation</h1>
    <p className="reservation-info">Votre réservation pour 4 personnes à Le Petit Bistro a été enregistrée.</p>
    <p className="reservation-detail">
      <strong>Date:</strong> 15 juin 2023
    </p>
    <p className="reservation-detail">
      <strong>Heure:</strong> 20:00
    </p>
    <p className="reservation-detail">
      <strong>Demandes spéciales:</strong> Table près de la fenêtre si possible
    </p>
    <p className="reservation-status">
      <strong>Statut:</strong> En attente de confirmation
    </p>
    <a className="reservation-action" href="{% url 'reservation-ticket' reservation.pk %}">Confirmer</a>
    <a className="reservation-action" href="{% url 'reservation-pending' reservation.pk %}">Annuler</a>
  </div>

}

export default reservationConfirmation;