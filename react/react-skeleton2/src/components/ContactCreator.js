/**
 * Created by kwongiho on 2017. 10. 31..
 */
import React from 'react';

class ContactCreator extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: ""
        };
    }

    handleChange(e) {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick() {
        this.props.onInsert(this.state.name , this.state.phone);
        this.setState({
           name: "",
            phone : ""
        });
    }
    render() {
        return(
            <div>
                <p>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} placeholder="name" />
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this)} placeholder="phone" />
                    <input type="button" value="Insert" onClick={this.handleClick.bind(this)}/>
                </p>
            </div>
        )
    }
}

export default ContactCreator;