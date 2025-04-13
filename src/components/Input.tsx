interface InputProps {
  type: string
  name: string
  placeholder?: string
}

export default function Input({ type, name, placeholder = '' }: InputProps) {
  return (
    <input type={type} name={name} placeholder={placeholder}/>
  );
}
