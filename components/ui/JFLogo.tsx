export default function JFLogo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      {/* J */}
      <path
        d="
          M54 18
          L54 70
          L32 92
          L16 76
          L26 66
          L38 78
          L44 72
          L44 18
          Z
        "
        fill="currentColor"
      />

      {/* F */}
      <path
        d="
          M64 18
          L112 18
          L102 30
          L76 30
          L76 48
          L100 48
          L90 60
          L76 60
          L76 110
          L64 110
          Z
        "
        fill="currentColor"
      />

      {/* Accent */}
      <path
        d="
          M88 82
          L100 82
          L110 72
          L118 72
          L106 90
          L88 90
          Z
        "
        fill="currentColor"
        opacity=".55"
      />
    </svg>
  );
}