import React from 'react';
import style from './Settings.module.css';
import { useForm } from "react-hook-form";


export default function Settings() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("settings"));

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
           <div>
               <input defaultValue="Set" {...register("example")} />
           </div>
           <div>
               <input {...register("exampleRequired", { required: true })} />
           </div>
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
}
