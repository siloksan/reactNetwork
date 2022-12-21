import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                avt + description
            </div>
        </div>

    )
}
export default ProfileInfo;