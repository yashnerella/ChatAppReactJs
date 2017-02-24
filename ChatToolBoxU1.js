/**
 * Created by yashw on 05-02-2017.
 */
import React from 'react';

class ChatToolBoxU1 extends React.Component{
    constructor(){
        super();
        this.state = {u1Msg: ""};
    }

    render(){
        return(
            <div>
                <label>USER 1: </label>
                <input type="text" placeholder="enter your message for U2" onChange={this.handleChange.bind(this)}
                       value={this.state.u1Msg}/>
                <button onClick={this.handleClick.bind(this)}>Send</button>
            </div>
            );
    }

    handleChange(event) {
        this.setState({
            u1Msg: event.target.value
        })
    }

    handleClick(){
        this.props.addMsg(this.state.u1Msg)
        this.setState({
            u1Msg: ""
        })
    }
}

export default ChatToolBoxU1;