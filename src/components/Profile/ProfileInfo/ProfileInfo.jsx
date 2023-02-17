import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../asets/images/user.png";
import solarFlare from "../../../asets/images/solar-flare.en.jpg";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = ({profile, updateStatus, status}) => {

    if (!profile) {
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
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto} alt="avatar"/>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                </div>
                <div className={s.aboutMe}>
                    <div>About me: {profile.aboutMe}</div>
                    <div>Full name: {profile.fullName}</div>
                    <div>My instagram: {profile.contacts.instagram}</div>
                </div>
            </div>
        </div>

    )
}
export default ProfileInfo;