import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewService.css';
const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://secret-beach-86139.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added New Service Successfully");
                    reset();
                }
            })
    };
    return (
        <div className="add-NewService">
            <h2>Add New Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 50 })} placeholder="Service Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image Url" />
                <input className="submit" type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;



