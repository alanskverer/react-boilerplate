import React from 'react'
import { Switch, Route, Link, withRouter, useHistory } from 'react-router-dom';



const About = (props) => {
    const { match, location } = props;

    let userName = "Alan"



    //THIS IS HOW WE GO TO ANOTHER PAGE WITH OBJECT FROM ONCLICK EVENT
    const history = useHistory();
    const goToAnotherPage = (pathName) => {

        const goToAnotherPage = {
            pathname: pathName,
            state: {
                name: userName
            }
        }
        history.push(goToAnotherPage);
    }
    return (
        <div>
            <h1>About page</h1>
            <button onClick={() => goToAnotherPage("/anotherPage")} >

                goToAnotherPage
            </button>
            <button onClick={() => goToAnotherPage("/materialui")} >

                goToMaretialUiPage
            </button>


        </div>
    )
}

export default withRouter(About);
