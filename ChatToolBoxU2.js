/**
 * Created by yashw on 05-02-2017.
 */
import React from 'react';

class ChatToolBoxU2 extends React.Component{
    constructor(){
        super();
        this.state = {u2Msg: ""};
    }

    render(){
        return(
            <div>
                <label>USER 2: </label>
                <input type="text" placeholder="enter your message for U1" onChange={this.handleChange.bind(this)}
                       value={this.state.u2Msg}/>
                <button onClick={this.handleClick.bind(this)}>Send</button>
            </div>
            );
    }

    handleChange(event) {
        this.setState({
            u2Msg: event.target.value
        })
    }

    handleClick(){
        this.props.addMsg(this.state.u2Msg)
        this.setState({
            u2Msg: ""
        })
    }
}

export default ChatToolBoxU2;