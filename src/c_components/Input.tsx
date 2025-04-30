import React from "react";

interface InputProps {
        inputType:
                | "text"
                | "password"
                | "email"
                | "search"
                | "tel"
                | "url"
                | "number"
                | "range"
                | "date"
                | "time"
                | "datetime-local"
                | "month"
                | "week"
                | "checkbox"
                | "radio"
                | "file"
                | "submit"
                | "reset"
                | "button"
                | "image"
                | "hidden"
                | "textarea";
        placeholder?: string;
        labelName?: string;
        labelStyles?: string;
        id?: string;
        inputStyles?: string;
        parentStyles?: string;
}

function Input({
        parentStyles,
        inputType,
        placeholder,
        labelName,
        id,
        inputStyles,
        labelStyles
}: InputProps) {
        return (
                <div className={` flex flex-col gap-3 text-white ${parentStyles}`}>
                        {labelName && (
                                <label className={`${labelStyles}`} htmlFor={id}>
                                        {labelName}
                                </label>
                        )}
                        {inputType == "textarea" ? (
                                <textarea
                                        id={id}
                                        placeholder={placeholder}
                                        className={`${inputStyles}`}
                                ></textarea>
                        ) : (
                                <input
                                        type={inputType}
                                        name=""
                                        id={id}
                                        placeholder={placeholder}
                                        className={`${inputStyles}`}
                                />
                        )}
                </div>
        );
}

export default Input;
