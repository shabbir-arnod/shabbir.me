export default function DeskIllustration() {
  return (
    <svg
      viewBox="0 0 520 460"
      className="w-full h-auto max-w-md mx-auto"
      role="img"
      aria-label="Illustration of a person working at a laptop on a desk"
    >
      <ellipse cx="270" cy="430" rx="220" ry="18" fill="#000000" opacity="0.35" />

      <rect x="60" y="360" width="400" height="26" rx="10" fill="#b8895b" />
      <rect x="60" y="384" width="400" height="14" rx="6" fill="#8f6a44" />
      <rect x="92" y="398" width="18" height="46" rx="4" fill="#6b4e33" />
      <rect x="410" y="398" width="18" height="46" rx="4" fill="#6b4e33" />

      <rect x="150" y="180" width="150" height="150" rx="26" fill="#1f2937" />
      <path
        d="M170 200 C170 214 182 226 196 226 C210 226 222 214 222 200 C222 186 210 174 196 174 C182 174 170 186 170 200 Z"
        fill="#e7b98d"
      />
      <path
        d="M172 186 C176 168 214 164 222 184 C226 194 224 202 220 200 C218 190 210 182 196 182 C184 182 176 188 174 198 C170 200 170 192 172 186 Z"
        fill="#2b2118"
      />

      <path
        d="M150 330 C150 280 168 254 196 254 C224 254 242 280 242 330 Z"
        fill="#374151"
      />
      <rect x="205" y="248" width="34" height="26" rx="10" fill="#e7b98d" />

      <g transform="translate(232 268) rotate(-6)">
        <rect x="0" y="0" width="150" height="96" rx="10" fill="#e5e7eb" />
        <rect x="8" y="8" width="134" height="72" rx="4" fill="#111827" />
        <rect x="18" y="52" width="14" height="20" rx="2" fill="#4d8dff" />
        <rect x="38" y="42" width="14" height="30" rx="2" fill="#7fe9de" />
        <rect x="58" y="34" width="14" height="38" rx="2" fill="#4d8dff" />
        <rect x="78" y="46" width="14" height="26" rx="2" fill="#ffd75e" />
        <rect x="0" y="96" width="150" height="8" rx="4" fill="#9ca3af" />
      </g>

      <rect x="120" y="330" width="180" height="10" rx="5" fill="#111827" opacity="0.4" />

      <g transform="translate(70 90)">
        <rect x="0" y="0" width="72" height="46" rx="12" fill="#ffd75e" />
        <rect x="14" y="14" width="44" height="6" rx="3" fill="#7a5c00" />
        <rect x="14" y="26" width="30" height="6" rx="3" fill="#7a5c00" />
      </g>

      <g transform="translate(370 70)">
        <circle cx="34" cy="34" r="34" fill="#4d8dff" />
        <path
          d="M20 35 L30 45 L50 22"
          stroke="#f5f5f7"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
