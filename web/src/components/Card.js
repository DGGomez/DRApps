import React, { Component } from 'react';

class Card extends Component {
    render() {
        const { title, description, status } = this.props;
        return (
            <div className="container">
                <div>
                  {`${title}`}
                </div>
                <div className="body__container">
                        {`${description}`}
                    </div>
                    <div className="body__container">
                        {`${status}`}
                    </div>
            </div>
        );
    }
}

export default Card;
