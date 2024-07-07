import "./tailwind.css"

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
    <div class="row">
      <form method="GET" action="{% url 'search_restaurant' %}">
        <div class="mb-3">
          <input type="text" class="form-control" name="q" placeholder="Search by name" />
        </div>
        <button type="submit" class="btn btn-primary">Search</button>
      </form>
      {restaurant && (<>
        <h2 class="mt-5">Results</h2>
        <ul class="list-group">
          <div class="col-md-4 d-flex align-items-stretch">
            <div class="card mb-4 shadow-sm">
              {restaurant.main_image && (
                <img src="{{ restaurant.main_image.url }}" class="card-img-top" alt="Image de {{ restaurant.name }}" />
              )}

              <div class="card-body d-flex flex-column">
                <h5 class="card-title">{restaurant.name}</h5>
                <p class="card-text">
                  {restaurant.description}<br />
                  {restaurant.address}<br />
                  <strong>Note: {restaurant.rating}</strong>
                </p>
                <div class="mt-auto">
                  <a class="btn btn-primary">Voir les détails</a>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </>
      )}
      <div class="col-md-12">
        <p>Aucun restaurant trouvé.</p>
      </div>
    </div>
  </>
}

export default restaurantList