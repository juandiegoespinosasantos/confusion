import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

// Container Component
class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES
        }
    }

    render() {
        const HomePage = () => {
            return (<Home />);
        }

        return (
            <div>
				<Header />
                
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>

				<Footer />
            </div>
        );
    }
}

export default Main;
