import React from 'react';
import { SlideProps } from '../types';
import F11AA from '../assets/logos/F11AA.webp';
import F21SK from '../assets/logos/F21SK.webp';
import F12Google from '../assets/logos/F12Google.png';
import F13Matterport from '../assets/logos/F13Matterport.png';
import F14LANL from '../assets/logos/F14LANL.png';
import F15CMU from '../assets/logos/F15CMU.png';
import F22JFF from '../assets/logos/F22JFF.png';
import F23Kiva from '../assets/logos/F23Kiva.png';
import F24UCLA from '../assets/logos/F24UCLA.png';
import F25UCB from '../assets/logos/F25UCB.png';
import LI from '../assets/logos/LI.png';

const people = [
  {
    name: 'Ashish Agrawal',
    title: 'CEO & CPO',
    photo: F11AA,
    linkedin: 'https://www.linkedin.com/in/ashish-r-agrawal/',
    orgs: [
      {
        logo: F12Google,
        text: '11 yrs building products & platforms used by millions',
      },
      {
        logo: F13Matterport,
        text: '2 yrs incubating VR & AI products & partnerships',
      },
      {
        logo: F14LANL,
        text: 'Built models for protein folding & immunology',
      },
      {
        logo: F15CMU,
        text: '',
      },
    ],
  },
  {
    name: 'Sonali Kothari',
    title: 'CRO & COO',
    photo: F21SK,
    linkedin: 'https://www.linkedin.com/in/sonalikothari/',
    orgs: [
      {
        logo: F23Kiva,
        text: 'Grew to $1B in loans as COO/CPO for 7.5 yrs',
      },
      {
        logo: F22JFF,
        text: 'COO of Future of Work accelerator',
      },
      {
        logo: F24UCLA,
        text: '',
      },
      {
        logo: F25UCB,
        text: '',
      },
    ],
  },
];

const LinkedInIcon = () => (
  <img
    src={LI}
    alt="LinkedIn"
    width="18"
    height="18"
    className="inline-block align-middle"
  />
);

const Slide19: React.FC<SlideProps> = () => {
  return (
    <div className="h-full flex flex-col relative items-center justify-center">
      <h1 className="text-4xl leading-tight font-extrabold text-left mt-4 mb-2">
        A team that built deep tech for millions of users<br /> and scaled complex multi-sided platforms
      </h1>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl mx-auto grid grid-cols-2 gap-6">
          {people.map((person) => (
            <div
              key={person.name}
              className="bg-slate-50 rounded-2xl shadow-md px-5 py-2 flex flex-col items-start border border-slate-100"
            >
              <div className="flex flex-row items-center w-full mb-2 gap-6">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow flex-shrink-0">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    style={{ minWidth: 0, minHeight: 0 }}
                  />
                </div>
                <div className="flex flex-col items-center justify-center flex-1 min-w-0">
                  <h2 className="text-3xl font-extrabold text-slate-800 whitespace-nowrap mb-1">{person.name}</h2>
                  <p className="text-xl text-teal-600 font-medium mb-3">{person.title}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full grayscale text-slate-500 mt-1"
                    aria-label={`LinkedIn profile of ${person.name}`}
                    style={{ lineHeight: 0 }}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              <div className="w-full flex items-center justify-center mb-3">
                <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
              </div>
              <div className="w-full flex flex-col items-center justify-center mb-0">
                <div className="grid grid-cols-2 gap-x-8 gap-y-5 w-full max-w-sm">
                  {person.orgs.map((org, i) => {
                    const isCMU = org.logo === F15CMU;
                    const isKiva = org.logo === F23Kiva;
                    return (
                      <div key={i} className="flex flex-col items-center justify-center">
                        <div
                          className="flex items-center justify-center w-[110px] h-[64px] bg-white rounded-lg border border-slate-100 shadow-sm"
                        >
                          <img
                            src={org.logo}
                            alt="Organization logo"
                            className={
                              isCMU
                                ? "object-fill w-full h-full"
                                : isKiva
                                  ? "object-contain"
                                  : "object-contain"
                            }
                            style={
                              isCMU
                                ? { maxWidth: '100%', maxHeight: '100%' }
                                : isKiva
                                  ? { maxWidth: '81px', maxHeight: '43px', width: '90%', height: '90%' }
                                  : { maxWidth: '90px', maxHeight: '48px', width: '100%', height: '100%' }
                            }
                          />
                        </div>
                        {org.text && (
                          <span className="text-slate-700 text-sm text-center font-normal leading-snug mt-1">{org.text}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//set a gradient background for this slide
(Slide19 as any).background = "linear-gradient(to bottom right, #c4b5fd, #a5f3fc)";
export default Slide19;