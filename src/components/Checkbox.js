export default function Checkbox({ dataKey, value, onChange }) {
  return <input type="checkbox" data-key={dataKey} checked={value} onChange={onChange} />;
}
