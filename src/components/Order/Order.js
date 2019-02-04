import React from 'react';
import { connect } from 'react-redux';
import Button from '../UI/Button/Button';

import * as actions from '../../Store/actions/index';
import classes from './Order.css';

const order = (props) => {
    const ingredients = []

    for (let ingredientName in props.ingredients) {
        if(props.ingredients[ingredientName] > 0) {
            ingredients.push(
                {
                    name: ingredientName,
                    amount:props.ingredients[ingredientName]
                }
            )
        }
    };

    const ingredientOutput = ingredients.map(ig => {
        return <span 
        style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
                <Button 
                    btnType="Danger"
                    clicked={() => props.onDeleteOrders(props.id)}>DELETE</Button>
            </div>
        </div>
    )
};

// export default order;

const mapStateToProps = state => {
    return {

    };
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteOrders: (id) => dispatch(actions.deleteOrders(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(order);