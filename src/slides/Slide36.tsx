import React from "react";
import { SlideProps, SlideComponentType } from "../types";
import {
  Users,
  Heart,
  Star,
  Building2,
  Rocket,
  Flame,
  PartyPopper,
  Brain,
} from "lucide-react";

// Placeholder images for redacted team member photos - all using gray color
const GrayPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRTVFN0VCIi8+CjxjaXJjbGUgY3g9IjUwIiBjeT0iMzciIHI9IjEyIiBmaWxsPSIjOUNDM0FGIi8+CjxwYXRoIGQ9Ik0yNSA3NUMyNSA2Ni43MTU3IDMxLjcxNTcgNjAgNDAgNjBINjBDNjguMjg0MyA2MCA3NSA2Ni43MTU3IDc1IDc1VjgwSDI1Vjc1WiIgZmlsbD0iIzlDQzNBRiIvPgo8L3N2Zz4K";

const Slide36: SlideComponentType = () => {
  const teamLead = {
    name: "Lorem Ipsum",
    title: "Head of Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    quote: "Lorem ipsum dolor sit amet consectetur",
    photo: GrayPlaceholder,
  };

  const teamMembers = [
    {
      name: "Dolor Sit",
      title: "Product UX Designer",
      description: "Lorem ipsum dolor sit amet",
      quote: "Lorem ipsum consectetur adipiscing",
      photo: GrayPlaceholder,
    },
    {
      name: "Amet Consectetur",
      title: "Product Manager",
      description: "Adipiscing elit sed do",
      quote: "Eiusmod tempor incididunt ut labore",
      photo: GrayPlaceholder,
    },
    {
      name: "Sed Eiusmod",
      title: "Software Engineer",
      description: "Tempor incididunt ut labore",
      quote: "Dolore magna aliqua ut enim",
      photo: GrayPlaceholder,
    },
    {
      name: "Ut Labore",
      title: "Software Engineer",
      description: "Dolore magna aliqua ut",
      quote: "Minim veniam quis nostrud",
      photo: GrayPlaceholder,
    },
    {
      name: "Magna Aliqua",
      title: "Software Engineer",
      description: "Enim ad minim veniam",
      quote: "Exercitation ullamco laboris nisi",
      photo: GrayPlaceholder,
    },
    {
      name: "Veniam Quis",
      title: "Software Engineer",
      description: "Nostrud exercitation ullamco",
      quote: "Aliquip ex ea commodo consequat",
      photo: GrayPlaceholder,
    },
  ];

  // Tessellated icon background pattern
  const BackgroundPattern = () => {
    const icons = [Rocket, Flame, PartyPopper, Star, Heart, Brain];
    const iconSize = 24;
    const spacing = 60;
    const rows = 10;
    const cols = 12;

    return (
      <div className="absolute inset-0 overflow-hidden opacity-90">
        {Array.from({ length: rows }, (_, rowIndex) => (
          <div
            key={rowIndex}
            className="absolute flex"
            style={{
              top: rowIndex * spacing,
              left: rowIndex % 2 === 1 ? spacing / 2 : 0, // Stagger every other row
              width: "120%",
            }}
          >
            {Array.from({ length: cols }, (_, colIndex) => {
              const IconComponent = icons[(rowIndex + colIndex) % icons.length];
              const colorClasses = [
                "text-emerald-600",
                "text-blue-600",
                "text-indigo-600",
                "text-teal-600",
                "text-purple-600",
                "text-orange-600",
              ];
              const colorClass =
                colorClasses[(rowIndex + colIndex) % colorClasses.length];

              return (
                <div
                  key={colIndex}
                  className={`${colorClass} opacity-20`}
                  style={{ marginRight: spacing }}
                >
                  <IconComponent size={iconSize} />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col relative">
      <BackgroundPattern />

      <div className="relative z-10 flex-1 flex flex-col items-start justify-start px-6 py-3">
        <h1 className="text-3xl font-extrabold text-slate-800 mt-2 mb-6 text-left leading-tight ml-2">
          Seasoned engineering leader & global talent
        </h1>

        <div className="w-full max-w-5xl mx-auto">
          {/* Lead Engineer - Large Image with Better Proportions */}
          <div className="mb-4">
            <div className="bg-indigo-50/60 rounded-xl shadow-sm p-5 border border-blue-200/50">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg ring-2 ring-blue-200/50">
                    <img
                      src={teamLead.photo}
                      alt={teamLead.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-slate-900 mb-0">
                    {teamLead.name}
                  </h2>
                  <p className="text-base text-slate-700 font-semibold mb-0">
                    {teamLead.title}
                  </p>
                  <p className="text-sm text-slate-700 mb-2 leading-relaxed">
                    {teamLead.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid - Full Width Quotes */}
          <div className="grid grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/60 rounded-lg shadow-md p-3 border border-slate-200/50 h-26 overflow-hidden"
              >
                <div className="h-full flex flex-col">
                  {/* Top section with image and basic info */}
                  <div className="flex items-start gap-3 mb-2">
                    <div className="relative flex-shrink-0 pr-2">
                      <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm ring-1 ring-slate-200/50">
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-700 leading-normal truncate">
                        {member.name}
                      </h3>
                      <p className="text-sm text-slate-700 font-semibold leading-normal mb-1">
                        {member.title}
                      </p>
                      <p className="text-xs text-slate-700 leading-tight">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Clean gradient background
Slide36.background =
  "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 50%, #e2e8f0 75%, #f8fafc 100%)";

export default Slide36;
