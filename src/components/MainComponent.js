import React from 'react';
import Header from './HeaderComponent';
import Menu from './Menu';
import Footer from './FooterComponent';
import DishDetail from './DishDetailComponent';
import {DISHES} from '../shared/dishes';

// Container Component
class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }   

    render() {
        return (
            <div>
				<Header />
  
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

				<Footer />
            </div>
        );
    }
}

export default Main;
