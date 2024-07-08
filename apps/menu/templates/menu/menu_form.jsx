import "../GlobalCSS/menu_form.css"

const menu_form = () => {
    const [formData, setFormData] = useState({
        name: "",
        Description: "",
        Prix: "",
        Categorie: "",
        Disponibilité: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:8000/api/submit_contact_form/",
                formData
            );
            alert("Form Submitted");
            setFormData({ name: "", Description: "", Prix: "", Categorie: "", Disponibilité: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again later.");
        }
    };

    <body>

        <img className="w-full h-60 body-image"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/159551170/original/e26afa7ff301ffe84af4e762998334479fca5604/design-a-professional-restaurant-or-hotel-menu-design-within-24-hours.png"
            alt="Image de couverture" />

        <main className="main-form">
            <h1 className="text-3xl add-new">Ajout de nouveau Menue</h1>

            <section className="MainsSection mt-8">
                <form onSubmit={handleSubmit} method="post" id="reservationForm">
                    <div className="form-group">
                        <label className="label-menu-form" htmlFor="table-number">Nom Menue</label>
                        <input onChange={handleChange} type="text" id="table-number" name="name" required />
                    </div>
                    <div className="form-group">
                        <label className="label-menu-form" htmlFor="Capacity">Description</label>
                        <input onChange={handleChange} type="text" id="Capacity" name="Description" required />
                    </div>
                    <div className="form-group">
                        <label className="label-menu-form" htmlFor="Capacity">Prix</label>
                        <input onChange={handleChange} type="text" id="Capacity" name="Prix" required />
                    </div>
                    <div className="form-group">
                        <label className="label-menu-form" htmlFor="Capacity">Categorie</label>
                        <input onChange={handleChange} type="text" id="Capacity" name="Categorie" required />
                    </div>
                    <div className="form-group">
                        <label className="label-menu-form" htmlFor="Capacity">Disponibilité</label>
                        <input onChange={handleChange} type="text" id="Capacity" name="Disponibilité" required />
                    </div>

                    <button className="submit-menu-form" type="submit" className="w-2/4 mt-8">Enregistrer</button>
                </form>
            </section>

        </main>

    </body>
}

export default menu_form;