import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {

   if (!profile) {
       return <Preloader />
   }

    return (
        <div>

            <div className={style.descriptionBlock}>
                <img src={profile.photos.large} />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>




            <div>
                <span className={style.description}>"About profile "</span>
                {profile.aboutMe}
            </div>
            <div>
                <span className={style.description}>"Looking for a job?"</span>
                {profile.lookingForAJob ? "YES!!!" : "No"}
            </div>
            <div>
                <span className={style.description}>"Подробнее:"</span>
                {profile.lookingForAJobDescription}</div>
            <div>
                <span className={style.description}>"Full name" </span>
                {profile.fullName}
            </div>
            <div>
                <span className={style.description}>"Contacts" </span>
                {profile.contacts.instagram}
            </div>

        </div>
    )
}

export default ProfileInfo;




