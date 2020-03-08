import React from 'react';

const Bar = ({
    heading,
    adherence,
    combination,
    dosing,
    guidelines,
    safety
}) => {
    const dosingMargin = adherence + combination;
    const guidelinesMargin = dosingMargin + dosing;
    const safetyMargin = guidelinesMargin + guidelines;
    return (
        <div className="stat-bar">
            <div>{heading}</div>
            <div className="bar">
                <div
                    className="inner-bar"
                    id="safety"
                    style={{
                        marginLeft: `${safetyMargin}%`,
                        width: `${safety}%`
                    }}
                ></div>
                <div
                    className="inner-bar"
                    id="guidelines"
                    style={{
                        marginLeft: `${guidelinesMargin}%`,
                        width: `${guidelines}%`
                    }}
                ></div>
                <div
                    className="inner-bar"
                    id="dosing"
                    style={{
                        marginLeft: `${dosingMargin}%`,
                        width: `${dosing}%`
                    }}
                ></div>
                <div
                    className="inner-bar"
                    id="combination"
                    style={{
                        marginLeft: `${adherence}%`,
                        width: `${combination}%`
                    }}
                ></div>
                <div
                    className="inner-bar"
                    id="adherence"
                    style={{ width: `${adherence}%` }}
                ></div>
            </div>
            <div
                className="percentages"
                style={{
                    gridTemplateColumns: `${adherence}% ${combination}% ${dosing}% ${guidelines}% ${safety}% auto`
                }}
            >
                <div className="percentage">{adherence}%</div>
                <div className="percentage">{combination}%</div>
                <div className="percentage">{dosing}%</div>
                <div className="percentage">{guidelines}%</div>
                <div className="percentage">{safety}%</div>
            </div>
        </div>
    );
};

export default Bar;
