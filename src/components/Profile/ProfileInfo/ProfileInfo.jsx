import React from "react";
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus.jsx'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../asets/images/user.png";
import solarFlare from "../../../asets/images/solar-flare.en.jpg";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src={solarFlare}
                    alt="solar flare"/>
                </div>
            <div className={s.profile}>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} alt="avatar"/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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