import "./tailwind.css"
import "./Style/restaurantDetail.css"

const restaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/restaurant/detail/${id}`)
      .then(response => {
        setRestaurant(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurants!', error);
      });
  }, [id]);

  < body >
    <div className="card mb-4 shadow-sm">
      <img src="https://images.websim.ai/v1/restaurant/le-bistro-parisien/main.jpg" className="card-img-top"
        alt="Image de Le Bistro Parisien" />
      <div className="row">
        <div className="col-md-3">
          <img src="https://images.websim.ai/v1/restaurant/le-bistro-parisien/interior.jpg" className="img-thumbnail"
            alt="Image secondaire de Le Bistro Parisien" />
        </div>
        <div className="col-md-3">
          <img src="https://images.websim.ai/v1/restaurant/le-bistro-parisien/dish1.jpg" className="img-thumbnail"
            alt="Image secondaire de Le Bistro Parisien" />
        </div>
        <div className="col-md-3">
          <img src="https://images.websim.ai/v1/restaurant/le-bistro-parisien/dish2.jpg" className="img-thumbnail"
            alt="Image secondaire de Le Bistro Parisien" />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{restaurant.name}</h5>
        <p className="card-text">
          <strong>Adresse:</strong> {restaurant.address}<br />
          <strong>Description:</strong> {restaurant.description}<br />
          <strong>Heures d'ouverture:</strong>{restaurant.opening_time} - {restaurant.closing_time}<br />
          <strong>Jours d'ouverture:</strong> {restaurant.get_opening_days_display}<br />
          <strong>Spécialité:</strong>{restaurant.speciality}<br />
          <strong>Note:</strong> <span className="rating">{restaurant.rating}</span>
        </p>
        
        <a href="{% url 'restaurant-list' %}" className="btn btn-secondary mt-3">Retour à la liste</a>
        <a href="{% url 'reservation-restaurant' restaurant.pk %}" className="btn btn-secondary mt-3">Faire une
          réservation</a>
      </div>
    </div>

  </body >

}

export default restaurantDetail