"use client";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

export const InputField = ({ onChange, value, placeholder }: Props) => {
  return (
    <input
      type="text"
      className="bg-white rounded"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};
