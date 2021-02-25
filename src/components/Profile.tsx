import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/reisvini1.png" alt="Vinícius Reis"/>
        <div>
            <strong>Vinícius Reis</strong>
            <p>
                <img src="icons/level.svg" alt="Nível"/>
                Level {level}
            </p>
        </div>
        </div>
    )
}