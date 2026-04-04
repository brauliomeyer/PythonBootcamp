export function SvgIcon({ iconPaths }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      {iconPaths.map((shape, index) => {
        if (shape.type === 'rect') {
          return <rect key={`rect-${index}`} {...shape.attrs} />;
        }

        return <path key={`path-${index}`} {...shape.attrs} />;
      })}
    </svg>
  );
}
