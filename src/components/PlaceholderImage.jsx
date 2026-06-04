export default function PlaceholderImage({ id, label }) {
  return (
    <figure className="placeholder-image" aria-label={`占位图 ${id}`}>
      <img src="/placeholders/archive-frame.svg" alt="" />
      <figcaption>
        <span>{label}</span>
        <small>{id}</small>
      </figcaption>
    </figure>
  );
}
