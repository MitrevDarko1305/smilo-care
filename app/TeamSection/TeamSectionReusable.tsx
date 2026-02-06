import React from "react";
import RevealOnScroll from "../Animations/RevealOnScroll";

export type Socials = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  profileUrl?: string;
  socials?: Socials;
};


export type TeamSectionProps = {
  // Copy
  subtitle?: string;
  title?: string;
  highlight?: string;
  description?: string;

  // Data
  members: TeamMember[];

  // Layout / style knobs (so it works on different pages)
  columns?: 2 | 3 | 4;
  containerClassName?: string; // e.g. "max-w-6xl"
  sectionClassName?: string; // e.g. "bg-slate-950"
  headerClassName?: string; // e.g. "text-white"
  highlightClassName?: string; // e.g. "text-teal-400"
  cardClassName?: string; // e.g. "bg-white" or "bg-white/5"
  imageClassName?: string; // e.g. "h-56 object-cover"
  showSocials?: boolean;
};

type SocialLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center opacity-80 hover:opacity-100 transition"
    >
      {children}
    </a>
  );
}

type TeamMemberCardProps = {
  member: TeamMember;
  cardClassName?: string;
  imageClassName?: string;
  showSocials?: boolean;
};

function TeamMemberCard({
  member,
  cardClassName = "bg-white",
  imageClassName = "h-56 object-cover",
  showSocials = true,
}: TeamMemberCardProps) {
  const { name, role, imageUrl, profileUrl, socials } = member;

  const hasAnySocial =
    !!socials?.facebook || !!socials?.twitter || !!socials?.instagram;

  return (
    <div className={`overflow-hidden rounded-2xl border border-black/5 ${cardClassName}`}>
      <RevealOnScroll>
      <img
        className={`w-full h-95 ${imageClassName} object-center object-top `}
        src={imageUrl}
        alt={`${name} — ${role}`}
        loading="lazy"
      />
      </RevealOnScroll>
      <RevealOnScroll>
      <div className="p-5 text-center">
        {profileUrl ? (
          <a
            href={profileUrl}
            className="font-semibold text-gray-900 hover:opacity-80 transition"
          >
            {name}
          </a>
        ) : (
          <div className="font-semibold text-gray-900">{name}</div>
        )}

        <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">
          {role}
        </div>

        {showSocials && hasAnySocial && (
          <div className="mt-4 flex items-center justify-center gap-4">
            {socials?.facebook && (
              <SocialLink href={socials.facebook} label={`${name} on Facebook`}>
                <FacebookIcon />
              </SocialLink>
            )}
            {socials?.twitter && (
              <SocialLink href={socials.twitter} label={`${name} on Twitter`}>
                <TwitterIcon />
              </SocialLink>
            )}
            {socials?.instagram && (
              <SocialLink href={socials.instagram} label={`${name} on Instagram`}>
                <InstagramIcon />
              </SocialLink>
            )}
          </div>
        )}
      </div>
      </RevealOnScroll>
    </div>
  );
}

/** Icons */
type IconProps = React.SVGProps<SVGSVGElement>;

const FacebookIcon = (props: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"
    />
  </svg>
);

const TwitterIcon = (props: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 310 310" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
C307.394,57.037,305.009,56.486,302.973,57.388z"
    />
  </svg>
);

const InstagramIcon = (props: IconProps) => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.6 6.6a.6.6 0 1 1-.6.6.6.6 0 0 1 .6-.6z"
    />
  </svg>
);

export default function TeamSection({
  subtitle = "THE TEAM",
  title = "Our",
  highlight = "Team",
  description,
  members,
  columns = 3,
  containerClassName = "max-w-screen-lg",
  sectionClassName = "bg-gray-100",
  headerClassName = "text-gray-900",
  highlightClassName = "text-indigo-600",
  cardClassName = "bg-white",
  imageClassName = "h-56 object-cover",
  showSocials = true,
}: TeamSectionProps) {
  const gridCols =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`${sectionClassName}`}>

      <RevealOnScroll>
      <div className={`py-12 mx-auto px-4 ${containerClassName}`}>

        <RevealOnScroll>
        <div className="text-center mb-12">
          {subtitle && (
           <RevealOnScroll><p className="text-sm  text-foreground/50">{subtitle}</p> </RevealOnScroll> 
          )}

          <RevealOnScroll>
          <h2 className={`mt-3 text-[45px] sm:text-4xl font-medium ${headerClassName}`}>
            {title}{" "}
            <span className={highlightClassName}>
              {highlight}
            </span>
          </h2>
          </RevealOnScroll>

          {description && (
            <RevealOnScroll>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-foreground/50">
              {description}
            </p>
            </RevealOnScroll>
          )}
        </div>
        </RevealOnScroll>

        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {members.map((m) => (
            <TeamMemberCard
              key={m.name}
              member={m}
              cardClassName={cardClassName}
              imageClassName={imageClassName}
              showSocials={showSocials}
            />
          ))}
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
}
