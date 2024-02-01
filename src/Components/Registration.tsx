import React, { useState, ChangeEvent } from "react";

import "../Styles/Registration.css";

const Registration: React.FC = () => {
    const [nickname, setNickname] = useState<string>("");
    const [isNicknameRelevant, setIsNicknameRelevant] = useState<boolean>(true);

    const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    }

    const onContinueButtonClick = () => {
        nickname.trim().length >= 3 ?
            setIsNicknameRelevant(true) :
            setIsNicknameRelevant(false);
    }

    const checkNickname = () => {
        if (nickname.trim().length >= 3) {
            return <p className="nn-ok-label">Nickname is OK. You can go next.</p>
        } else {
            return <p className="nn-err-label">Nickname must be at least 3 characters.</p>
        }
    }

    return (
        <div className="Registration">
            <h1 className="registration-title">Enter your nickname.</h1>
            <div>
                <input className={nickname.trim().length >= 3 ? "relevant-input" : "not-relevant-input"} type="text" value={nickname} onChange={handleChangeNickname} />
                {checkNickname()}
                <button className="accept-button" onClick={onContinueButtonClick}>Continue</button>
            </div>
        </div>
    )
}

export default Registration;