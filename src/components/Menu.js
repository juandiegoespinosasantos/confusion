/**
 * Front-End Web Development with React - Week 1, assignment 1
 * @author https://github.com/juandiegoespinosasantos
 * @since Jul 20, 2020
 */
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

// Now a Functional Component
function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}                    
            </div>
        </div>
    );
}

export default Menu;