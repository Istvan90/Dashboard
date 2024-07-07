import "../GlobalCSS/menu_delete.css"

const menuDelete = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/dish/list/api/${id}/`)
      .then(response => {
        setMenu(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurant details!', error);
      });
  }, [id]);

  <body>
    <div class="container">
      <h1>Confirmation de Suppression</h1>
      <p>Êtes-vous sûr de vouloir supprimer le plat <span class="menu-name">"{dish.name}"</span> ?</p>
      <p>Cette action est irréversible.</p>
      <form method="post">
        <div class="button-group">
          <button type="submit" class="btn btn-danger">
            <span class="icon icon-delete"></span>
            Oui, supprimer
          </button>
          <a href="{% url 'dish-list' %}" class="btn btn-secondary">
            <span class="icon icon-cancel"></span>
            Annuler
          </a>
        </div>
      </form>
    </div>
  </body>
}

export default menuDelete;