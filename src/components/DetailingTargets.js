import React, { Component } from 'react';

class DetailingTargets extends Component {
    roundToFive(num) {
        const res = num / 5;
        if (res <= 0.4) {
            return '-';
        } else {
            return `${Math.round(res) * 5}%`;
        }
    }

    render() {
        return (
            <div className="modal">
                <div className="block">
                    <div
                        className="toggle"
                        onClick={this.props.toggleDetails}
                    >
                        X
                    </div>
                    <h2>
                        Target proportions for detailing topics by HCP
                        profile
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Confident</th>
                                <th>Cautious</th>
                                <th>Complacent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aherence</td>
                                <td>
                                    {this.roundToFive(
                                        this.props.adherenceConfident
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props.adherenceCautious
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props.adherenceComplacent
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Combination therapy</td>
                                <td>
                                    {this.roundToFive(
                                        this.props
                                            .combinationConfident
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props.combinationCautious
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props
                                            .combinationComplacent
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Dosing</td>
                                <td>
                                    {this.roundToFive(
                                        this.props.dosingConfident
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props.dosingCautious
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props.dosingComplacent
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Guidelines</td>
                                <td>
                                    {this.roundToFive(
                                        this.props.guidelinesConfident
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props.guidelinesCautious
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props
                                            .guidelinesComplacent
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>Safety</td>
                                <td>
                                    {this.roundToFive(
                                        this.props.safetyConfident
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props.safetyCautious
                                    )}
                                </td>
                                <td>
                                    {this.roundToFive(
                                        this.props.safetyComplacent
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DetailingTargets;
