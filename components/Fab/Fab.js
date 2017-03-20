/**
 * Created by jordy on 11-03-17.
 */
import React from 'react';
import Component from'../Component';
class Fab extends Component {
    render() {
        return (
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i className="material-icons">add</i>
            </button>
        );
    }
}

export default Fab;