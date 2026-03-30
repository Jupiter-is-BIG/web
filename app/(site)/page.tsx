import Image from "next/image";
import { generalConfig } from "@/lib/config/general";
import { socialConfig } from "@/lib/config/socials";
import Link from "next/link";
import { expConfig } from "@/lib/config/exp";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";

export default function Home() {
  return (
    <div className="w-full py-10 px-6 md:px-32 flex flex-col">
      <section className="w-full flex flex-col-reverse md:flex-row items-center md:items-start justify-around gap-10 mt-16 md:mt-24">
        {/* Left */}
        <div className="flex flex-col gap-4 flex-1 max-w-3xl">
          <p className="text-md font-mono text-black/40 uppercase tracking-widest">
            About Me
          </p>
          <p className="text-md leading-relaxed max-w-full text-justify">
            {generalConfig.bio}
          </p>

          {/* Education */}
          <div className="mt-8">
            <p className="text-md font-mono text-black/40 uppercase tracking-widest mb-3">
              Education
            </p>
            <div className="flex flex-col gap-3">
              {expConfig.eduExp.map((edu) => (
                <div
                  key={edu.school}
                  className="flex flex-row justify-between items-start"
                >
                  <div>
                    <p className="font-semibold text-sm">{edu.degree}</p>
                    <p className="text-sm text-black">{edu.school}</p>
                  </div>
                  <p className="text-xs font-mono text-black/40 whitespace-nowrap ml-4 mt-0.5">
                    {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="mt-6 mb-10">
            <p className="text-md font-mono text-black/40 uppercase tracking-widest mb-3">
              Experience
            </p>
            <div className="flex flex-col gap-4">
              {expConfig.workExp.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-row justify-between items-start">
                    <div>
                      <p className="font-semibold text-sm">{job.role}</p>
                      <p className="text-sm text-black">
                        {job.company}
                        {job.location && (
                          <span className="text-black font-mono text-xs ml-2">
                            · {job.location}
                          </span>
                        )}
                      </p>
                    </div>
                    <p className="text-xs font-mono text-black/40 whitespace-nowrap ml-4 mt-0.5">
                      {job.period}
                    </p>
                  </div>
                  {(job as { description?: string }).description && (
                    <p className="text-sm text-justify text-black/60 mt-1 leading-relaxed">
                      {(job as { description?: string }).description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Photo + Social */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={generalConfig.avatar}
              alt={generalConfig.name}
              width={320}
              height={320}
              className="w-full h-full object-cover object-[65%_center]"
            />
          </div>
          <div className="flex flex-row gap-4">
            {socialConfig.links
              .filter((link) => link.showOnProfile)
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-label={link.label}
                  className="text-black/60 hover:text-black transition-colors"
                >
                  <link.icon size={32} />
                </Link>
              ))}
          </div>
          <ObfuscatedEmail email={generalConfig.email} />
          {/* News */}
          <div className="w-full mt-8">
            <p className="text-md font-mono text-black uppercase tracking-widest mb-3">
              News
            </p>
            <div className="relative">
              <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1 scrollbar-hide">
                {expConfig.news.map((item, i) => (
                  <div key={i} className="flex flex-row gap-3 items-start">
                    <span className="text-xs font-mono text-black/40 whitespace-nowrap mt-0.5 w-20 shrink-0">
                      {item.date}
                    </span>
                    <span className="text-xs text-black/80 leading-relaxed max-w-2xs ">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              {/* fade */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-primary to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
