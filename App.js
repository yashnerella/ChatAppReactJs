import React from 'react';
import MessageDump from './MessageDump.js';

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>This is a Chat Application</h1>
             <MessageDump/>
         </div>

      );
   }
}

export default App;