interface CheckBoxProps {
  id: number
  labelFor?: string
}

export default function CheckBox({ id, labelFor }: CheckBoxProps) {
  return (
    <>
      <input type="checkbox" id={`checkbox-${id}`} />
      <label
        htmlFor={`checkbox-${id}`}
        style={{ marginLeft: '5px' }}
      >
        {labelFor}
      </label>
    </>
  );
}
