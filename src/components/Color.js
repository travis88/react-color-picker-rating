import React, { Component } from 'react';
import StarRating from './StarRating';
import PropTypes from 'prop-types';

export default class Color extends Component {
    componentWillMount() {
        this.style = { backgroundColor: "#CCC" };
    }

    shouldComponentUpdate(nextProps) {
        const { rating } = this.props;
        return rating !== nextProps.rating;
    }

    componentWillUpdate(nextProps) {
        const { title, rating } = this.props;
        this.style = null;
        this.refs.title.style.backgroundColor = "red";
        this.refs.title.style.color = "white";
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`);
    }

    componentDidUpdate(prevProps) {
        const { title, rating } = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
        console.log(`${title} is getting ${status}`);
        this.refs.title.style.backgroundColor = "";
        this.refs.title.style.color = "black";
    }

    render() {
        const { title, color, rating, onRate, onRemove } = this.props;
        return (
            <section className="colord"
                     style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={onRemove}
                        style={{ float: "right" }}>X</button>
                <div className="color"
                     style={{ backgroundColor: color }}></div>
                <StarRating starsSelected={rating}
                            onRate={onRate} />
            </section>
        );
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

Color.defaulProps = {
    title: undefined,
    rating: 0,
    color: "#000000",
    onRate: f=>f,
    onRemove: f=>f
}