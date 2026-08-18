function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M17.64,9.20455c0,-0.63864 -0.05727,-1.25182 -0.16455,-1.84091H9v3.48409h4.84364c-0.20864,1.125 -0.84273,2.07819 -1.79637,2.71592v2.25682h2.90819C16.64,14.79773 17.64,12.23864 17.64,9.20455Z"
      />
      <path
        fill="#34A853"
        d="M9,18c2.43,0 4.46727,-0.80591 5.95637,-2.18318l-2.90819,-2.25682c-0.80591,0.54 -1.83682,0.85909 -3.04818,0.85909c-2.34409,0 -4.32818,-1.58318 -5.03637,-3.70955H0.95727v2.33182C2.43818,15.98318 5.48182,18 9,18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.96364,10.71c-0.18,-0.54 -0.28182,-1.11682 -0.28182,-1.71c0,-0.59318 0.10227,-1.17 0.28182,-1.71V4.95818H0.95727C0.34773,6.17318 0,7.54773 0,9c0,1.45227 0.34773,2.82682 0.95727,4.04182Z"
      />
      <path
        fill="#EA4335"
        d="M9,3.57682c1.32136,0 2.50773,0.45409 3.44045,1.34591l2.58182,-2.58182C13.46318,0.891818 11.43,0 9,0 5.48182,0 2.43818,2.01682 0.95727,4.95818l3.00818,2.33182C4.67182,5.16 6.65591,3.57682 9,3.57682Z"
      />
    </svg>
  );
}

export type CertIcon =
  | { kind: "image"; src: string }
  | { kind: "glyph"; Icon: typeof GoogleLogo };

export const certIcons: Record<string, CertIcon> = {
  "AI for Product Management": { kind: "image", src: "/certs/pendo.webp" },
  "Introduction to AI": { kind: "glyph", Icon: GoogleLogo },
  "Professional Scrum Product Owner™ I (PSPO I)": { kind: "image", src: "/certs/pspo1.webp" },
  "Agile Product Ownership": { kind: "image", src: "/certs/icagile.webp" },
  "AWS Certified Solutions Architect, Associate": { kind: "image", src: "/certs/aws-sa.webp" },
  "AWS Certified Cloud Practitioner": { kind: "image", src: "/certs/aws-cp.webp" },
};
