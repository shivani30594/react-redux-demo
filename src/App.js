import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import appRoutes from "./routes/app";
import { withRouter } from "react-router";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

class App extends Component
{
    render() {
        return (
            <div className="App">
            <Header />
                <div className="main-content">
                    <Switch>
                    {appRoutes.map((prop, key) => {
                        if (prop.redirect)
                            return <Redirect from={prop.path} to={prop.to} key={key} />;
                        return (                
                            <Route exact={prop.exact} path={prop.path} component={prop.component} key={key} />                
                        );
                    })}       
                    </Switch>          
                </div>
                <Footer /> 
            </div>
        );
    }
}

export default withRouter(App);
