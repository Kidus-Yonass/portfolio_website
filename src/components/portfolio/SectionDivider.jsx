export default function SectionDivider({ label }) {
  return (
    <div className="section-divider my-16 mx-auto max-w-2xl" aria-hidden="true">
      <span>/* {label} */</span>
    </div>
  );
}