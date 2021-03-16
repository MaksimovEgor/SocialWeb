import React from 'react';
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>

            <div className={style.content}>
                <img  src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2018/08/hubble_contributes_to_painting_a_picture_of_the_evolving_universe/17651944-1-eng-GB/Hubble_contributes_to_painting_a_picture_of_the_evolving_Universe_pillars.jpg"/>
            </div>

            <div> Ava + description </div>

            <MyPosts />

        </div>

    )
}

export default Profile;