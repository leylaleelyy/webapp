import React ,{Fragment}from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import TabComponent from "./pages/pages";
import Passage from "./pages/passage/Passage";
import FriendCircle from "./pages/circle/FriendCircle";
class App extends React.Component {
    render(){
        return(
            <Router >
                <Fragment>
                    <Route path="/"  exact component={TabComponent} />
                    <Route path="/passage"  component={Passage} />
                    <Route path="/friend-circle"  component={FriendCircle} />
                </Fragment>
            </Router>
        )
    }
}
export default App;
