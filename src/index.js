import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import OverView from './components/Overview';
import Detailing from './components/Detailing';

import AboutProfile from './components/AboutProfile';
import DetailingTargets from './components/DetailingTargets';

import './style.css';

import Data from './data.json';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAbout: false,
            showDetails: false
        };

        this.toggleAbout = this.toggleAbout.bind(this);
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleAbout() {
        this.setState({
            showAbout: !this.state.showAbout
        });
    }

    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        });
    }

    render() {
        const { showAbout, showDetails } = this.state;
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="toolbar">
                        <div className="heading">Welcome.</div>
                        <div className="username">
                            {Data[0].username}
                        </div>
                        <div className="heading">Metrics</div>
                        <Link to="/">
                            <div className="item">Overview</div>
                        </Link>
                        <Link to="/detailing">
                            <div className="item">Detailing</div>
                        </Link>
                        <div className="item">Calls</div>
                        <div className="heading">Information</div>
                        <div
                            className="item"
                            onClick={this.toggleAbout}
                        >
                            About Profile
                        </div>
                        <div
                            className="item"
                            onClick={this.toggleDetails}
                        >
                            Detailing Targets
                        </div>
                    </div>
                    <div className="routes">
                        <Switch>
                            <Route
                                path="/"
                                exact
                                component={OverView}
                            />
                            <Route
                                path="/detailing"
                                component={Detailing}
                            />
                        </Switch>
                    </div>
                    {showAbout && (
                        <AboutProfile
                            toggleAbout={this.toggleAbout}
                            cautious={25}
                            complacent={47}
                            confident={28}
                        />
                    )}
                    {showDetails && (
                        <DetailingTargets
                            toggleDetails={this.toggleDetails}
                            adherenceConfident={Data[5].adherence}
                            adherenceCautious={Data[3].adherence}
                            adherenceComplacent={Data[4].adherence}
                            combinationConfident={Data[5].combination}
                            combinationCautious={Data[3].combination}
                            combinationComplacent={
                                Data[4].combination
                            }
                            dosingConfident={Data[5].dosing}
                            dosingCautious={Data[3].dosing}
                            dosingComplacent={Data[4].dosing}
                            guidelinesConfident={Data[5].guidelines}
                            guidelinesCautious={Data[3].guidelines}
                            guidelinesComplacent={Data[4].guidelines}
                            safetyConfident={Data[5].safety}
                            safetyCautious={Data[3].safety}
                            safetyComplacent={Data[4].safety}
                        />
                    )}
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
