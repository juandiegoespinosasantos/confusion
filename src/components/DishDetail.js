/**
 * Front-End Web Development with React - Week 1, assignment 1
 * @author https://github.com/juandiegoespinosasantos
 * @since Jul 20, 2020
 */
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

// Presentational Component
function RenderDish({dish}) {
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

function RenderComments({comments}) {
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
                                <p> - {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

function DishDetail(props) {
    const dish = props.dish;

    if (dish == null) {
        return (<div></div>);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>

                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;