// interface InputProps {
//         inputType:
//                 | "text"
//                 | "password"
//                 | "email"
//                 | "search"
//                 | "tel"
//                 | "url"
//                 | "number"
//                 | "range"
//                 | "date"
//                 | "time"
//                 | "datetime-local"
//                 | "month"
//                 | "week"
//                 | "checkbox"
//                 | "radio"
//                 | "file"
//                 | "submit"
//                 | "reset"
//                 | "button"
//                 | "image"
//                 | "hidden"
//                 | "textarea";
//         placeholder?: string;
//         labelName?: string;
//         labelStyles?: string;
//         id?: string;
//         inputStyles?: string;
//         parentStyles?: string;
//         value: string;
//         onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// function Input({
//         parentStyles,
//         inputType,
//         placeholder,
//         labelName,
//         id,
//         inputStyles,
//         labelStyles,
//         value,
//         onChange
// }: InputProps) {
//         return (
//                 <div className={`flex flex-col gap-3 text-white ${parentStyles}`}>
//                         {labelName && (
//                                 <label className={labelStyles} htmlFor={id}>
//                                         {labelName}
//                                 </label>
//                         )}
//                         {inputType === "textarea" ? (
//                                 <textarea
//                                         // value={value}
//                                         // name={name}
//                                         id={id}
//                                         placeholder={placeholder}
//                                         className={`${inputStyles} min-h-16`}
//                                 />
//                         ) : (
//                                 <input
//                                         value={value}
//                                         onChange={onChange}
//                                         type={inputType}
//                                         id={id}
//                                         placeholder={placeholder}
//                                         className={inputStyles}
//                                 />
//                         )}
//                 </div>
//         );
// }

// export default Input;

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
        name?: string;
        value?: string;
        onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

function Input({
        parentStyles,
        inputType,
        placeholder,
        labelName,
        id,
        inputStyles,
        labelStyles,
        name,
        value,
        onChange
}: InputProps) {
        return (
                <div className={`flex flex-col gap-3 text-white ${parentStyles}`}>
                        {labelName && (
                                <label className={labelStyles} htmlFor={id}>
                                        {labelName}
                                </label>
                        )}
                        {inputType === "textarea" ? (
                                <textarea
                                        name={name}
                                        id={id}
                                        placeholder={placeholder}
                                        className={`${inputStyles} min-h-16`}
                                        onChange={onChange}
                                />
                        ) : (
                                <input
                                        name={name}
                                        value={value}
                                        onChange={onChange}
                                        type={inputType}
                                        id={id}
                                        placeholder={placeholder}
                                        className={inputStyles}
                                />
                        )}
                </div>
        );
}

export default Input;