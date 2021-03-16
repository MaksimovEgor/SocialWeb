import React from 'react';
import style from "./Profile.module.css";
import Profile from "./Profile";


class ProfileContainer extends React.component {
    componentDidMount();
    render() {
        return (
            <div className={style.content}>
                <Profile {...this.props} />
            </div>

        )
    }
}


export default ProfileContainer;
