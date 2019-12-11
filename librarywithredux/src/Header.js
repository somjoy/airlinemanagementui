import React, {Component} from 'react';
import {Switch, Route, Link} from "react-router-dom";
import LoanDetails from "./loan/LoanDetails";
import LoginWithValidation from "./login/LoginWithValidation";
import AddLoanDetails from "./loan/AddLoanDetails";

class Header extends Component {

    render() {
        return (
            <div>
                <h2>Loan Details</h2>
                <nav>
                    <ul>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/login'}>Login</Link></li>
                        <li><Link to={'/loan'}>Add Loan</Link></li>
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    <Route exact path='/' component={LoanDetails}/>
                    <Route exact path='/contact' component={AddLoanDetails}/>
                    <Route exact path='/about' component={LoanDetails}/>
                    <Route exact path='/login' component={LoginWithValidation}/>
                    <Route exact path='/' component={AddLoanDetails}/>

                </Switch>
            </div>
        );
    }
}
export default Header;

