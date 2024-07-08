import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import "./tailwind.css"

const dishlist = () => {
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

    <div className="grid grid-cols-3 gap-16 m-5">
        <div
            className="max-w-sm h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg"
                    src="//media.istockphoto.com/id/1403973419/fr/photo/plateau-de-table-de-nourriture-%C3%A9tal%C3%A9-sur-la-table.jpg?s=612x612&w=0&k=20&c=PzwsucRNDMmWYKlldi96gZWnpAuYYW5qqtp6BA5X7dQ="
                    alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {dish.name} <br />  {dish.prix} €
                    </h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {dish.description}
                </p>

                <div className="button flex gap-6">
                    <a href="{% url 'menu_update' menu.pk %}"
                        className="text-align inline-flex w-2/4 items-center pl-11 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Modifier
                    </a>

                    <a href="{% url 'menu_delete' menu.pk %}"
                        className="inline-flex w-2/4 items-center pl-11 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                        Supprimer
                    </a>
                </div>
            </div>
        </div>

        <a className="col-start-2 text-center dark:bg-gray-800 buttonAdd text-white font-bold py-2 px-4 rounded"
            href="{% url 'menu_create' %}">
            Ajouter un nouveau plat
        </a>
    </div>
}

export default dishlist;