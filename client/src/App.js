import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';

import Words from './pages/Words';
import { Detail } from './pages/Detail';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path={['/', '/words']}>
                            <Words />
                        </Route>
                        <Route exact path="/words/:id">
                            <Detail />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
