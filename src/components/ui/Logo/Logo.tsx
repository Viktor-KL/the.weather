import { FC } from 'react'

import styles from './Logo.module.scss'

const Logo: FC = () => {
    return (
        <div className={styles.wrapper}><p className={styles.logo}>the.weather</p></div>
    )
}

export default Logo;