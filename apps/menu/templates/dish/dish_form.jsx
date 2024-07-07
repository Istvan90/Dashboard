import "../GlobalCSS/menu_form.css"

const dish_form = () => {
    const [formData, setFormData] = useState({
        name: "",
        Description: "",
        Prix: "",
        Image: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:8000/menu/dish/create/",
                formData
            );
            alert("Form Submitted");
            setFormData({ name: "", Description: "", Prix: "", Image: ""});
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again later.");
        }
    };

    <body>

        <img class="w-full h-60"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/159551170/original/e26afa7ff301ffe84af4e762998334479fca5604/design-a-professional-restaurant-or-hotel-menu-design-within-24-hours.png"
            alt="Image de couverture" />

        <main>
            <h1 class="text-3xl">Ajout de nouveau Menue</h1>

            <section class="MainsSection mt-8">
                <form onSubmit={handleSubmit} method="post" id="reservationForm">
                    <div class="form-group">
                        <label htmlFor="table-number">Nom Plat</label>
                        <input onChange={handleChange} type="text" id="table-number" name="name" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="Capacity">Description</label>
                        <input onChange={handleChange} type="text" id="Capacity" name="Description" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="Capacity">Prix</label>
                        <input onChange={handleChange} type="text" id="Capacity" name="Prix" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="Capacity">Image</label>
                        <input onChange={handleChange} type="folder" id="Capacity" name="Categorie" required />
                    </div>
              
                    <button type="submit" class="w-2/4 mt-8">Enregistrer</button>
                </form>
            </section>

        </main>

    </body>
}

export default dish_form;