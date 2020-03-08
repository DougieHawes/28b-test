import React from 'react';

const CallPie = ({ count, target }) => {
    return (
        <div className="call-pie">
            <div className="count">{count}</div>
            <div className="target">/{target}</div>
            <svg transform="rotate(-90)">
                <circle cx="70" cy="70" r="70"></circle>
                <circle
                    cx="70"
                    cy="70"
                    r="70"
                    style={{
                        strokeDashoffset: `${440 -
                            (440 * ((count / target) * 100)) / 100}`
                    }}
                ></circle>
            </svg>
        </div>
    );
};

export default CallPie;
