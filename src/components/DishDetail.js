/**
 * Front-End Web Development with React - Week 1, assignment 1
 * @author https://github.com/juandiegoespinosasantos
 * @since Jul 20, 2020
 */
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends React.Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />

                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody> 
            </Card>
        );
    }

    renderComments(comments) {
        if(comments == null) {
            return (<div></div>);
        }

        return (
            <div>
                <h4 className="font-weight-bold">Comments</h4>

                <ul className="list-unstyled">
                    {
                        comments.map((comment) => {
                            return (
                                <li key={comment.id}>
                                    <p className="font-italic">{comment.comment}</p>
                                    <p> - {comment.author}, {new Date(comment.date).getFullYear()} </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

    render() {
        const dish = this.props.selectedDish;

        if (dish == null) {
            return (<div></div>);
        }

        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>

                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;