import React from 'react'
import { withRouter } from 'react-router'
import BootstrapComponents from '../Components/BootstrapComponents';
import styles from '../../src/mystyle.module.css'


const AnotherPage = (props) => {
    const { match, location, history } = props;

    //EXTRACT WHAT WE SEND AS AN OBJECT FROM PREVIOUS PAGE
    console.log(location.state)


    return (
        <div className={styles.anotherPageContainer}>
            <h3>Another page</h3>
            {/* <p>{location.state.name}</p> */}
            <div className={styles.alertContainer} >
                <BootstrapComponents image="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg" />
            </div>

        </div>
    )
}

export default withRouter(AnotherPage);
