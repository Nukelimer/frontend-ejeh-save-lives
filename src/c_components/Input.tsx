type ErrorKeys =
        | "donorEmail"
        | "donorPassword"
        | "donorName"
        | "donorPhone"
        | "hospitalEmail"
        | "hospitalPassword"
        | "hospitalName"
        | "hospitalPhone"
        | "hospitalAddress"
        | "collectorEmail"
        | "collectorPassword"
        | "collectorName"
        | "collectorPhone"
        | "hospitalAddress"
        | "hospitalWebsite"
        | "collectorWebsite" | "collectorAddress";

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
        name: ErrorKeys;
        formError?: Partial<Record<ErrorKeys, boolean | string>>;
        

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
        onChange,
        formError
}: InputProps) {
        return (
                <div className={`flex flex-col gap-2 ${parentStyles}`}>
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
                                        className={`${inputStyles} min-h-16 ${
                                                formError?.[name]
                                                        ? "!border-red-500 border !bg-red-100"
                                                        : ""
                                        }`}
                                        onChange={onChange}
                                        value={value}
                                />
                        ) : (
                                <input
                                        name={name}
                                        value={value}
                                        onChange={onChange}
                                        type={inputType}
                                        id={id}
                                        placeholder={placeholder}
                                        className={`${inputStyles} ${
                                                formError?.[name]
                                                        ? "!border-red-500 border !bg-red-100"
                                                        : ""
                                        }`}
                                />
                        )}
                        {formError?.[name] && (
                                <span className="text-red-500 text-sm">
                                        {name === "donorName" && "Name is required"}
                                        {name === "collectorName" && "Name is required"}

                                        {name === "hospitalName" && "Name is required"}
                                        {name === "donorEmail" && "Please enter a valid email"}
                                        {name === "collectorEmail" && "Please enter a valid email"}
                                        {name === "hospitalEmail" && "Please enter a valid email"}
                                        {name === "donorPassword" &&
                                                "Password must be at least 6 characters with a special character"}

                                        {name === "collectorPassword" &&
                                                "Password must be at least 6 characters with a special character"}
                                        {name === "hospitalPassword" &&
                                                "Password must be at least 6 characters with a special character"}
                                        {name === "collectorPhone" &&
                                                "Phone number must be 10-11 digits"}
                                        {name === "donorPhone" &&
                                                "Phone number must be 10-11 digits"}
                                        {name === "hospitalPhone" &&
                                                "Phone number must be 10-11 digits"}
                                        {name === "hospitalAddress" &&
                                                "Your address is too short and not descriptive enough."}

                                        {name === "collectorAddress" &&
                                                "Your address is too short and not descriptive enough."}

                                        {name === "hospitalWebsite" &&
                                                `The website should have this: "https://" before your website, i.e, https://www.myhospital.com`}
                                        {name === "collectorWebsite" &&
                                                `The website should have this: "https://" before your website, i.e, https://www.myhospital.com`}
                                </span>
                        )}
                </div>
        );
}

export default Input;
