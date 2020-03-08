import React, { Component } from 'react';

import CallPie from './CallPie';
import Bar from './Bar';

import Data from '../data.json';

export default class Overview extends Component {
    getAverage(n1, n2, n3) {
        return Math.round((n1 + n2 + n3) / 3);
    }

    getDate = string => {
        let day = string.slice(8, 10);
        if (day === '01' || day === '21' || day === '31') {
            day = day + 'st';
        } else if (day === '02' || day === '22') {
            day = day + 'nd';
        } else if (day === '03' || day === '23') {
            day = day + 'rd';
        } else {
            day = day + 'th';
        }

        let month = string.slice(5, 7);

        switch (month) {
            case '01':
                month = 'January';
                break;
            case '02':
                month = 'February';
                break;
            case '03':
                month = 'March';
                break;
            case '04':
                month = 'April';
                break;
            case '05':
                month = 'May';
                break;
            case '06':
                month = 'June';
                break;
            case '07':
                month = 'July';
                break;
            case '08':
                month = 'August';
                break;
            case '09':
                month = 'September';
                break;
            case '10':
                month = 'October';
                break;
            case '11':
                month = 'November';
                break;
            case '12':
                month = 'December';
                break;
            default:
                break;
        }

        let year = string.slice(0, 4);

        return `${day} ${month}, ${year}`;
    };

    render() {
        return (
            <div className="overview route">
                <h2>Overview</h2>
                <div className="calls">
                    <div className="next-call">
                        <h3>Next call</h3>
                        <div className="next-call-details">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="key">Date</td>
                                        <td>
                                            {this.getDate(
                                                Data[1].date
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="key">
                                            Account
                                        </td>
                                        <td>{Data[1].account}</td>
                                    </tr>
                                    <tr>
                                        <td className="key">
                                            Speciality
                                        </td>
                                        <td>
                                            {Data[1].speciality.map(
                                                item => {
                                                    return (
                                                        <p key={item}>
                                                            {item}
                                                        </p>
                                                    );
                                                }
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="key">
                                            Profile
                                        </td>
                                        <td>{Data[1].profile}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <h3>Calls this month</h3>
                        <CallPie
                            count={Data[2].count}
                            target={Data[2].target}
                        />
                    </div>
                </div>
                <div className="topics">
                    <h3>Detailing topic breakdown</h3>
                    <div className="legend">
                        <div className="legend-item">
                            <i className="fas fa-square" id="one"></i>
                            Adherence
                        </div>
                        <div className="legend-item">
                            <i className="fas fa-square" id="two"></i>
                            Combination therapy
                        </div>
                        <div className="legend-item">
                            <i
                                className="fas fa-square"
                                id="three"
                            ></i>
                            Dosing
                        </div>
                        <div className="legend-item">
                            <i
                                className="fas fa-square"
                                id="four"
                            ></i>
                            Guidelines
                        </div>
                        <div className="legend-item">
                            <i
                                className="fas fa-square"
                                id="five"
                            ></i>
                            Safety
                        </div>
                        <div className="legend-item">
                            <i className="fas fa-square" id="six"></i>
                            Other
                        </div>
                    </div>
                    <Bar
                        heading="Avg. all"
                        adherence={this.getAverage(
                            Data[3].adherence,
                            Data[4].adherence,
                            Data[5].adherence
                        )}
                        combination={this.getAverage(
                            Data[3].combination,
                            Data[4].combination,
                            Data[5].combination
                        )}
                        dosing={this.getAverage(
                            Data[3].dosing,
                            Data[4].dosing,
                            Data[5].dosing
                        )}
                        guidelines={this.getAverage(
                            Data[3].guidelines,
                            Data[4].guidelines,
                            Data[5].guidelines
                        )}
                        safety={this.getAverage(
                            Data[3].safety,
                            Data[4].safety,
                            Data[5].safety
                        )}
                    />
                    <Bar
                        heading="Cautious"
                        adherence={Data[3].adherence}
                        combination={Data[3].combination}
                        dosing={Data[3].dosing}
                        guidelines={Data[3].guidelines}
                        safety={Data[3].safety}
                    />
                    <Bar
                        heading="Complacent"
                        adherence={Data[4].adherence}
                        combination={Data[4].combination}
                        dosing={Data[4].dosing}
                        guidelines={Data[4].guidelines}
                        safety={Data[4].safety}
                    />
                    <Bar
                        heading="Confident"
                        adherence={Data[5].adherence}
                        combination={Data[5].combination}
                        dosing={Data[5].dosing}
                        guidelines={Data[5].guidelines}
                        safety={Data[5].safety}
                    />
                </div>
            </div>
        );
    }
}
