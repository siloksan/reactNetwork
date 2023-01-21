import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import userPhoto from "../../../asets/images/user.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg"
                    alt=""/>
            </div>
            <div className={s.profile}>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="avatar"/>
                </div>
                <div className={s.aboutMe}>
                    <div>About me: {props.profile.aboutMe}</div>
                    <div>Full name: {props.profile.fullName}</div>
                    <div>My instagram: {props.profile.contacts.instagram}</div>
                </div>
            </div>
        </div>

    )
}
export default ProfileInfo;