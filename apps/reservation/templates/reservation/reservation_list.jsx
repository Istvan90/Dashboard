import "./Style/reservation_list.css"

export function ReservationList() {
  const { id } = useParams();
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/reservation/')
      .then(response => {
        setReservation(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurants!', error);
      });
  }, [id]);

  return (
    reservation ? (
      <div className="container">
        <h1>Mes Réservations</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Restaurant</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Personnes</th>
              <th>Statut</th>
              <th>Demandes spéciales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{reservation.restaurant.name}</td>
              <td>{reservation.reservation_date}</td>
              <td>{reservation.reservation_time}</td>
              <td>{reservation.number_of_people}</td>
              <td>{reservation.get_status_display}</td>
              <td>{reservation.special_requests}</td>
              <td>
                <a href="{% url 'reservation-cancel' reservation.id %}" className="btn btn-danger">Annuler</a>
                <a href="{% url 'reservation-update' reservation.id %}" className="btn btn-success">Modifier</a>

                <a href="{% url 'reservation-ticket' reservation.id %}" className="btn btn-primary">Confirmer</a>

                <a href="{% url 'reservation-ticket' reservation.id %}" className="btn btn-outline-primary">Voir le ticket</a>

              </td>
            </tr>

          </tbody>
        </table>
      </div>
    ) : (
      <p>Vous n'avez aucune reservation :(</p>
    )
  );
}