import { forwardRef } from "react";

interface InputProps {
    placeholder: string;
    type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder, type = "text" }, ref) => {
        return (
            <div>
                <input
                    type={type}
                    placeholder={placeholder}
                    className="px-4 py-2 border rounded"
                    ref={ref}
                />
            </div>
        );
    }
);