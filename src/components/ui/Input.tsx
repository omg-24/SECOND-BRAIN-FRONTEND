interface InputProps {
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Input({ onChange, placeholder }: InputProps) {
    return (
        <div>
            <input
                type="text"
                placeholder={placeholder}
                className="px-4 py-2 border rounded"
                onChange={onChange}
            />
        </div>
    );
}