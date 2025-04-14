interface TextAreaProps {
  value?: string
  placeholder?: string
}

export default function TextArea({ value = '', placeholder = '' }: TextAreaProps) {
  return (
    <textarea
      defaultValue={value}
      placeholder={placeholder}
      style={{
        width: '480px',
        height: '100px',
        border: '1px solid #ddd',
        padding: '10px',
        outline: 'none',
      }}
    />
  );
}
