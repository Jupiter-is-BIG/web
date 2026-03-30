import Link from "next/link";
import Image from "next/image";
import { publicationsConfig } from "@/lib/config/publications";

export default function ResearchPage() {
  return (
    <div className="w-full py-10 px-6 md:px-32 flex flex-col mt-16 md:mt-24">
      <p className="text-md font-mono text-black/40 uppercase tracking-widest mb-8">
        Publications
      </p>

      <div className="flex flex-col divide-y divide-black/10">
        {publicationsConfig.publications.map((pub, i) => (
          <div
            key={i}
            className="py-6 flex flex-col md:flex-row gap-4 md:gap-10 items-start"
          >
            {/* Year */}
            <span className="text-sm font-mono text-black/40 shrink-0 w-12">
              {pub.year}
            </span>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              {/* Text */}
              <div className="flex flex-col gap-1 flex-1">
                <p className="font-semibold text-sm leading-snug">
                  {pub.title}
                </p>
                <p className="text-sm text-black">{pub.authors}</p>
                <p className="text-xs font-mono text-black italic">
                  {pub.venue}
                </p>

                <div className="flex flex-row gap-3 mt-2">
                  {pub.arxiv && (
                    <Link
                      href={pub.arxiv}
                      target="_blank"
                      className="text-xs font-mono px-2.5 py-1 border border-black/20 rounded-full hover:border-black transition-colors"
                    >
                      paper
                    </Link>
                  )}
                  {pub.paper && !pub.arxiv && (
                    <Link
                      href={pub.paper}
                      target="_blank"
                      className="text-xs font-mono px-2.5 py-1 border border-black/20 rounded-full hover:border-black transition-colors"
                    >
                      paper
                    </Link>
                  )}
                  {pub.code && (
                    <Link
                      href={pub.code}
                      target="_blank"
                      className="text-xs font-mono px-2.5 py-1 border border-black/20 rounded-full hover:border-black transition-colors"
                    >
                      code
                    </Link>
                  )}
                </div>
              </div>

              {/* Image - right side */}
              {pub.image && (
                <div className="shrink-0 w-full md:w-36 h-full rounded-lg overflow-hidden border border-black/10">
                  <Image
                    src={pub.image}
                    alt={pub.title}
                    width={144}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
