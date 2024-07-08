import "./tailwind.css"
import "./Style/restaurantList.css"

const restaurantList = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/restaurant/list/api`)
      .then(response => {
        setRestaurant(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurants!', error);
      });
  }, [id]);

  <>
    <div className="row">
      <form method="GET" action="{% url 'search_restaurant' %}">
        <div class="mb-3">
          <input type="text" class="form-control" name="q" placeholder="Search by name" />
        </div>
        <button type="submit" class="btn btn-primary">Search</button>
      </form>
    </div>
    <h2 class="mt-5">Resultat</h2>

    {
      restaurant.map(restaurant =>
        <div class="row">
          <div class="col-md-4 d-flex align-items-stretch">
            <div class="card mb-4 shadow-sm">
              <img src={restaurant.main_image} class="card-img-top"
                alt="Image de Le Bistro Parisien" />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{restaurant.name}</h5>
                <p class="card-text">
                  {restaurant.description}<br />
                  <strong>Note: {restaurant.rating}  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }

  </>

}

export default restaurantList