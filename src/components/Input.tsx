interface InputProps {
  type: string
  value?: string
  placeholder?: string
}

export default function Input({ type, value = '', placeholder = '' }: InputProps) {
  return (
    <input
      type={type}
      defaultValue={value}
      placeholder={placeholder}
      style={{
        width: '480px',
        border: '1px solid #ddd',
        padding: '10px',
        outline: 'none',
      }}
  />
  );
}
