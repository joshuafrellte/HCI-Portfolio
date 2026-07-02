import { certificates } from "@/data/certificates";
import CertificateCard from "./CertificateCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="section-padding section-container"
    >
      <SectionHeader
        id="certificates-heading"
        index="04"
        title="Certificates"
        description="Credentials and completed courses that complement my academic work."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </section>
  );
}
