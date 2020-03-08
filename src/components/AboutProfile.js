import React, { Component } from 'react';

class AboutProfile extends Component {
    render() {
        return (
            <div className="modal">
                <div className="block">
                    <div
                        className="toggle"
                        onClick={this.props.toggleAbout}
                    >
                        X
                    </div>
                    <h2>About Profile</h2>
                    <div className="profile-grid">
                        <h3>Cautious</h3>
                        <h3>Complacent</h3>
                        <h3>Confident</h3>
                        <div className="grid-para">
                            HCP has a start low/go slow approach and
                            lacks confidience/knowledge in
                            differential diagnosis.
                        </div>
                        <div className="grid-para">
                            HCP tends to repeat what consultant
                            prescribes and may not differentiate
                            between the various conditions.
                        </div>
                        <div className="grid-para">
                            HCP is comfortable using new therapies on
                            a variety of patients and/or are confident
                            in diagnosing this condition.
                        </div>
                        <div className="grid-para">
                            Reinforce safety with combination therapy
                            and share local KOL best practice in
                            differential diagnosis.
                        </div>
                        <div className="grid-para">
                            Share success stories from other local
                            practices that have undertaken patient
                            reviews.
                        </div>
                        <div className="grid-para">
                            Show how proper use of maintenance therapy
                            could increase patient retention.
                        </div>
                        <div className="grid-para">
                            <i>
                                This HCP profile represents{' '}
                                <span>{this.props.cautious}%</span> of
                                your accounts
                            </i>
                        </div>
                        <div className="grid-para">
                            <i>
                                This HCP profile represents{' '}
                                <span>{this.props.complacent}%</span>{' '}
                                of your accounts
                            </i>
                        </div>
                        <div className="grid-para">
                            <i>
                                The HCP profile represents{' '}
                                <span>{this.props.confident}%</span>{' '}
                                of your accounts
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutProfile;
