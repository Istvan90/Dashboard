import "./tailwind.css"

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

  <div class="card mb-4 shadow-sm">
    <img src="{{ restaurant.main_image.url }}" class="card-img-top" alt="Image de {{ restaurant.name }}" />
    <div class="row">
      <div class="col-md-3">
        <img src="{{ image.image.url }}" class="img-thumbnail" alt="Image secondaire de {{ restaurant.name }}" />
      </div>
    </div>
    <div class="card-body">
      <h5 class="card-title">{restaurant.name}</h5>
      <p class="card-text">
        <strong>Adresse:</strong> {restaurant.address}<br />
        <strong>Description:</strong> {restaurant.description}<br />
        <strong>Heures d'ouverture:</strong> {restaurant.opening_time} - {restaurant.closing_time}<br />
        <strong>Jours d'ouverture:</strong> {restaurant.get_opening_days_display}<br />
        <strong>Spécialité:</strong> {restaurant.speciality}<br />
        <strong>Note:</strong> {restaurant.rating}
      </p>
      <h5>Images secondaires</h5>

      <a href="{% url 'restaurant-list' %}" class="btn btn-secondary mt-3">Retour à la liste</a>
      <a href="{% url 'reservation-restaurant' restaurant.pk %}" class="btn btn-secondary mt-3">Faire une reservation</a>
    </div>
  </div>
}

export default restaurantDetail