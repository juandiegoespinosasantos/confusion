/**
 * Front-End Web Development with React - Week 3, assignment 3
 * @author https://github.com/juandiegoespinosasantos
 * @since Aug 12, 2020
 */
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends React.Component {

    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        alert(JSON.stringify(values));
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
            </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Leave a comment for {this.props.dishName} </ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Author</Label>

                                <Col md={10}>
                                    <Control.text className="form-control" model=".author" name="author" id="author" placeholder="Author" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />

                                    <Errors model=".author" className="text-danger" show="touched" messages={{ required: 'Required', minLength: 'Must be 3 characters long.', maxLength: 'Must be 15 characters long.' }} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>

                                <Col md={ 10 }>
                                    <Control.select className="form-control" model=".rating" name="rating" id="rating">
                                        <option selected="true">5</option>
                                        <option>4</option>
                                        <option>3</option>
                                        <option>2</option>
                                        <option>1</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comments</Label>

                                <Col md={10}>
                                    <Control.textarea className="form-control" model=".comment" name="comment" id="comment" rows="5" validators={{ required }} />

                                    <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Must enter a comment.' }} />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

// Presentational Component
function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />

                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ dishName, comments }) {
    if (comments == null) {
        return (<div></div>);
    }

    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>

            <ul className="list-unstyled">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p className="font-italic">{comment.comment}</p>
                            <p>-- {comment.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                        </li>
                    );
                })}
            </ul>

            <CommentForm dishName={dishName} />
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
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>{dish.name}</h3>

                    <hr />
                </div>
            </div>

            <div className="row">
                <RenderDish dish={dish} />

                <RenderComments dishName={dish.name} comments={props.comments} />
            </div>
        </div>
    );
}

export default DishDetail;