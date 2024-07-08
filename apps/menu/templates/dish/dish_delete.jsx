import "../GlobalCSS/menu_delete.css"

const menuDelete = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/dish/list/api/${id}/`)
      .then(response => {
        setDish(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurant details!', error);
      });
  }, [id]);

  <body className="body-delete">
    <div className="container">
      <h1 className="confirm-delete">Confirmation de Suppression</h1>
      <p className="paragraph-delete">Êtes-vous sûr de vouloir supprimer le plat <span className="menu-name">"{dish.name}"</span> ?</p>
      <p className="paragraph-delete">Cette action est irréversible.</p>
      <form method="post">
        <div className="button-group">
          <button type="submit" className="btn btn-danger">
            <span className="icon icon-delete"></span>
            Oui, supprimer
          </button>
          <a href="{% url 'dish-list' %}" className="btn btn-secondary">
            <span className="icon icon-cancel"></span>
            Annuler
          </a>
        </div>
      </form>
    </div>
  </body>

}
export default menuDelete;