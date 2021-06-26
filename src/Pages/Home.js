import React, { Fragment } from 'react'
import styles from '../../src/mystyle.module.css'
import { Switch, Route, Link, withRouter } from 'react-router-dom';

const Home = (props) => {

    let userId = 13;
    var userObj = {
        userId: 13,
        userName: "Alan"

    };


    //DEFINE WHAT YOU WANT TO PASS TO THE OTHER PAGE AND THEN LINK TO THIS VARIABLE LIKE THIS
    //<Link to={aboutPage}>go to about</Link><br />

    //IF I WANT TO GO TO OTHER PAGE WITH ONCLOCK EVENT - CHECK ABOUT.JS
    const aboutPage = {
        pathname: `about/${userId}`,
        state: { userId: 15 }
    }

    return (
        <div className={styles.flexContainer}>
            <p>Home Screen</p>

        </div >
    )
}

export default withRouter(Home)

// t withRouter(App)