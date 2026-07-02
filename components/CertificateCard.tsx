import { FiExternalLink } from "react-icons/fi";
import type { Certificate } from "@/data/certificates";
import Card from "@/components/ui/Card";

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const { title, issuer, date, imageUrl, link } = certificate;

  return (
    <Card interactive className="flex flex-col overflow-hidden">
      <div
        className="flex aspect-[4/3] items-center justify-center border-b border-neutral-300 bg-neutral-100"
        role="img"
        aria-label={`${title} certificate image placeholder`}
      >
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="text-sm text-neutral-500">Certificate image</span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <h3 className="font-serif text-xl font-semibold text-eerie-black">
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-600">{issuer}</p>
        <p className="mt-1 text-sm text-neutral-500">{date}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-oxford-blue transition-all duration-200 hover:text-deep-space-blue hover:underline hover:underline-offset-4"
          >
            View certificate
            <FiExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </Card>
  );
}
