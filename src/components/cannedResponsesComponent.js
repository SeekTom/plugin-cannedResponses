import React, { Component } from 'react';
import { withTaskContext, withTheme, Actions } from '@twilio/flex-ui';
class CannedResponses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { id: 0, message: "Hello, thanks for contacting support - how can I help today?" },
                { id: 1, message: "One moment please." },
                { id: 2, message: "Not a problem, let me check that for you." },
                { id: 3, message: "Is there anything else I can help with today?" },
                { id: 4, message: "Glad I could help!" }
            ]
        }
    }

    sendMessage(message) {
        const { task } = this.props;
        Actions.invokeAction("SendMessage", { "channelSid": task.attributes.channelSid, body: message }, (payload) => {
            console.log('sent!');
        })
        console.log(task.attributes.channelSid);
    }

    render() {
        const buttonTheme = {
            background: this.props.theme.colors.base3,
            color: this.props.theme.calculated.textColor,
            height: 18, border: 0, marginBottom: 1, borderRadius: 100, width: "100%", cursor: "pointer"
        }
        const containerTheme = {
            paddingLeft: "2.75%", paddingRight: "2.75%", paddingBottom: 4
        }
        return <div style={containerTheme}>
            {this.state.messages.map(message => (
                <button style={buttonTheme} key={message.id}
                    onClick={() => this.sendMessage(message.message)}>{message.message}
                </button>
            ))}
        </div>
    }
}

export default withTheme(withTaskContext(CannedResponses));