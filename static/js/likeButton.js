'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return e(
                'button',
                { onClick: () => this.setState({ liked: false }) },
                'Liked'
            );
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

const domContainer = document.querySelector('#like-button');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));