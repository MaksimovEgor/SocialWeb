import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                {editMode
                    ? <ProfileDataForm profile={profile}/>
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}


            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>

        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}

        <div>
            <b>Full name:</b> {profile.fullName}
        </div>

        <div>
            <b>Looking for a job?:</b> {profile.lookingForAJob ? "yes" : "no"}
            {profile.lookingForAJob &&
            <div>
                <b>Skills:</b> : {profile.lookingForAJobDescription}
            </div>}
        </div>

        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}
const ProfileDataForm = ({profile}) => {
    return <div>
        <div>
            <b>Full name:</b> {profile.fullName}
        </div>

        <div>
            <b>Looking for a job?:</b> {profile.lookingForAJob ? "yes" : "no"}
            {profile.lookingForAJob &&
            <div>
                <b>Skills:</b> : {profile.lookingForAJobDescription}
            </div>}
        </div>

        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

export default ProfileInfo;