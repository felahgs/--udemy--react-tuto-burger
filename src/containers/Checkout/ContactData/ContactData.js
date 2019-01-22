import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault(); // Prevents the default event of reloading the page in the form

        // alert('Purchase Confirmed');
        this.setState ({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Mister Something',
                address: {
                    street: 'Teststreet ',
                    zipCode: '21342',
                    country: 'Brazil'
                },
                email: 'test@mail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response)
                this.setState({ loading: false});
                this.props.history.push('/'); // History is not avaliable due to the rout being created with 'render'so props is
            })
            .catch(error => {
                console.log(error)
                this.setState({ loading: false});
            });
    }

    render () {
        let form = (
            <form>
                <Input inputType="input" type="text" name="name" placeholder="Your Name" />
                <Input inputType="input" type="email" name="email" placeholder="Your Email" />
                <Input inputType="input" type="text" name="street" placeholder="Street" />
                <Input inputType="input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;