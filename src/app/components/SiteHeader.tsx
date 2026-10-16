import Image from "next/image";
import { PLAN } from "@/lib/plan";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <a href="#topo" className="brand" aria-label={`CPPEM ${PLAN.name} — início`}>
          <Image src="/brand/logo-cppem.png" alt="CPPEM" width={700} height={239} priority />
          <span className="brand-divider" aria-hidden />
          <span className="brand-label">{PLAN.name}</span>
        </a>
      </div>
    </header>
  );
}
