export default function LabelBadge({ children, color = 'rift' }) {
  const colorMap = {
    rift: { color: 'var(--rift)', border: 'var(--rift)' },
    amber: { color: 'var(--amber)', border: 'var(--amber)' },
    trace: { color: '#888', border: '#555' },
  };
  const style = colorMap[color] || colorMap.rift;

  return (
    <span
      className="label-badge"
      style={{ color: style.color, borderColor: style.border }}
    >
      {children}
    </span>
  );
}