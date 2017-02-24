/**
 * Created by yashw on 05-02-2017.
 */
import React from 'react';
import ChatToolBoxU1 from './ChatToolBoxU1.js';
import ChatToolBoxU2 from './ChatToolBoxU2.js';

class MessageDump extends React.Component{
    constructor() {
        super();
        this.state = {
            messageLog: []
        }

    }

    render(){
        let msgLog = this.state.messageLog

        return(
            <div>
                <div className="messagedump">
                    <div>
                        {msgLog.map((msg,i)=>
                            <li key={i}>{msg.msgTime} {msg.msgSource} {msg.msgData}</li>
                        )}
                    </div>
                </div>
                <ChatToolBoxU1 addMsg={this.addMsgU1.bind(this)}/>
                <ChatToolBoxU2 addMsg={this.addMsgU2.bind(this)}/>
            </div>

        )
    }

    addMsgU1(u1Msg) {
        let msgLog = this.state.messageLog;
        msgLog.push({msgData: u1Msg,
            msgTime: new Date().toLocaleTimeString(),
            msgSource: "U1: "})
        this.setState({
            messageLog: msgLog
        })
    }

    addMsgU2(u2Msg) {
        let msgLog = this.state.messageLog;
        msgLog.push({msgData: u2Msg,
            msgTime: new Date().toLocaleTimeString(),
            msgSource: "U2: "})
        this.setState({
            messageLog: msgLog
        })
    }
}

export default MessageDump;