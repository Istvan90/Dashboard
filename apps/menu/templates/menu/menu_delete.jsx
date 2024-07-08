import "../GlobalCSS/menu_delete.css"

const menuDelete = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/Menu/list/api/${id}/`)
      .then(response => {
        setMenu(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the restaurant details!', error);
      });
  }, [id]);

  <body className="body-delete">
    <div className="container">
      <h1 className="confirm-delete">Confirmation de Suppression</h1>
      <p className="paragraph-delete">Êtes-vous sûr de vouloir supprimer le menu <span className="menu-name">"{menu.name}"</span> ?</p>
      <p className="paragraph-delete">Cette action est irréversible.</p>
      <form method="post">
        <div className="button-group">
          <button type="submit" className="btn btn-danger">
            <span className="icon icon-delete"></span>
            Oui, supprimer
          </button>
          <a href="{% url 'menu-list' %}" className="btn btn-secondary">
            <span className="icon icon-cancel"></span>
            Annuler
          </a>
        </div>
      </form>
    </div>
  </body>
}

export default menuDelete;