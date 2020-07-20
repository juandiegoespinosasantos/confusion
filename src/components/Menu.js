/**
 * Front-End Web Development with React - Week 1, assignment 1
 * @author https://github.com/juandiegoespinosasantos
 * @since Jul 20, 2020
 */
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishDetail';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        });
    }

    renderDish(dish) {           
        return (<DishDetail selectedDish={dish} />);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}                    
                </div>

                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }
}

export default Menu;