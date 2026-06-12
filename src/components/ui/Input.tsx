import { forwardRef } from "react";

interface InputProps {
    placeholder: string;
    type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder, type = "text" }, ref) => {
        return (
            <div className="w-full">
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100"
                    ref={ref}
                />
            </div>
        );
    }
);