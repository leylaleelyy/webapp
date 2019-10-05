import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import TabComponent from "./pages/pages";
import Passage from "./pages/passage/Passage";
class App extends React.Component {
    render(){
        return(
            <Router >
                <div>
                    <Route path="/"  exact component={TabComponent} />
                    <Route path="/passage"  component={Passage} />
                </div>
            </Router>
        )
    }
}
export default App;
