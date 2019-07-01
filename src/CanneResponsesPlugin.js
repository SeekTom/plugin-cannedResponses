import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CannedResponses from './components/cannedResponsesComponent';
const PLUGIN_NAME = 'CannedResponsesPlugin';

export default class CannedResponsesPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    flex.MessagingCanvas.Content.add(<CannedResponses key="messages" />);
    
   
  }
}
