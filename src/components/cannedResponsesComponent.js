import React, {Component } from 'react';
import { withTaskContext, withTheme, Actions } from '@twilio/flex-ui';
class CannedMessages extends Component {
    constructor(props) {
       
        super(props);
        this.state = { 
            messages:[   
            {id:0, message: "Hello, thanks for contacting support - how can I help today?"}, 
            {id:1, message: "One moment please."},
            {id:2, message: "Not a problem, let me check that for you."},
            {id:3, message: "Is there anything else I can help with today?"}, 
            {id:4, message: "Glad I could help, don't hesitate to contact support if you need any further help."}
        ]
        }      
        
    }

    sendMessage(message){
        const {task} = this.props;
        Actions.invokeAction("SendMessage", {"channelSid":task.attributes.channelSid, body:message},  (payload) =>{
            console.log('sent!');    //  
        })
        console.log(task.attributes.channelSid);
        
    }
    render() { 

        const buttonTheme={
            
                background: this.props.theme.colors.base2,
                color: this.props.theme.textColor
                
            
        }
       return ( this.state.messages.map(message => (
            
            <button style={buttonTheme} key={message.id} onClick={ ()=>this.sendMessage(message.message)}>{message.message}</button>
        )) );
    }
}
 
export default withTheme(withTaskContext(CannedMessages)); 
