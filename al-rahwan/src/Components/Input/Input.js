import React from 'react';

import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={"InputElement"}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={"InputElement"}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
            break;
        case ('checkbox'):
            inputElement = (
                <div>
                    {props.elementConfig.options.map((option, index) => (
                        <div key={index} className="row checkboxGroup">
                            <span
                                className="col-md-2">{option.displayValue} {option.value}
                                </span>
                            <input className="col-md-4" type="checkbox" checked={option.value}
                                   key={option.displayValue}
                                   onSubmit={() => props.handelCheckbox(index)}
                            >
                            </input>

                        </div>
                    ))}
                </div>
            );
            break;
        default:
            inputElement = <input
                className={"InputElement"}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>;
    }

    return (
        <div>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;