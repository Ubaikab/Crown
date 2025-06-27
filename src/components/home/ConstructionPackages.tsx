
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

interface PackageFeature {
  title: string;
  items: string[];
}

interface PackageOption {
  title: string;
  features: PackageFeature[];
}

const ConstructionPackages: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, Record<string, boolean>>>({
    standard: {
      "Design & Drawing": false,
      "Core Construction Materials": false,
      "Flooring & Wall Tiling": false,
      "Painting": false,
      "Electricals": false,
      "Plumbing": false,
      "Doors & Windows": false,
      "Kitchen & Bathroom Fixtures": false,
      "Fabrication Work": false,
      "Warranties & Exclusions": false,
      "Government Sanction Assistance": false
    },
    premium: {
      "Design & Drawing": false,
      "Core Construction Materials": false,
      "Flooring & Wall Tiling": false,
      "Painting": false,
      "Electricals": false,
      "Plumbing": false,
      "Doors & Windows": false,
      "Kitchen & Bathroom Fixtures": false,
      "Fabrication Work": false,
      "Warranties & Exclusions": false,
      "Government Sanction Assistance": false
    },
    luxury: {
      "Design & Drawing": false,
      "Core Construction Materials": false,
      "Flooring & Wall Tiling": false,
      "Painting": false,
      "Electricals": false,
      "Plumbing": false,
      "Doors & Windows": false,
      "Kitchen & Bathroom Fixtures": false,
      "Fabrication Work": false,
      "Warranties & Exclusions": false,
      "Government Sanction Assistance": false
    },
  });

  const toggleSection = (packageType: string, section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [packageType]: {
        ...prev[packageType],
        [section]: !prev[packageType][section],
      },
    }));
  };

  const packageOptions: Record<string, PackageOption> = {
    standard: {
      title: "STANDARD PACKAGE",
      features: [
        {
          title: "Core Construction Materials",
          items: [
            "Fe500/550 Grade TMT Steel (A-One, India Gold or equivalent)",
            "53 & 43 Grade Cement (Penna, Maha, Priya, Dalmia or equivalent)",
            "RMC – M20 Grade Concrete Mix",
            "6″ & 4″ Solid Blocks",
            "20MM & 40MM Aggregates",
            "M-Sand for blockwork & P-Sand for plastering",
            "6″ solid block underground sump with waterproof plaster",
            "No size stone masonry under plinth",
            "Ceiling height: 10 feet (floor to floor)",
            "Waterproofing with Dr Fixit or Fosroc"
          ]
        },
        {
          title: "Flooring & Wall Tiling",
          items: [
            "Living/Kitchen/Dining/Bedroom: Tiles up to ₹60/sqft",
            "Staircase: Granite up to ₹80/sqft",
            "Balcony/Sitout: Anti-skid tiles up to ₹35/sqft",
            "Bathroom/Toilet: Wall & floor tiles up to ₹35/sqft",
            "Parking: Floor tiles up to ₹35/sqft",
            "Kitchen countertop: Up to ₹100/sqft",
            "Kitchen dado up to 2ft: ₹35/sqft",
            "Bathroom dadoing height up to 7ft",
            "Terrace screed concreting"
          ]
        },
        {
          title: "Painting",
          items: [
            "Interiors: 2 coats putty + 1 coat primer + 2 coats Asian Tractor Emulsion",
            "Exterior walls: 1 coat primer + 2 coats Ace Emulsion",
            "2 coats enamel paint for MS window grills",
            "Brands: Asian, Berger, Dulux (as per owner's choice)"
          ]
        },
        {
          title: "Electricals",
          items: [
            "Anchor wires or equivalent",
            "HiFi switches or equivalent",
            "DBs and MCBs included",
            "1 UPS point per unit at feasible location"
          ]
        },
        {
          title: "Plumbing",
          items: [
            "CPVC pipes: Ashirwad/Supreme/Astral",
            "PVC overhead tank: Ganga/Kaveri with 6ft MS structure",
            "Solar & geyser provision lines to diverters/mixtures only",
            "Sewage chambers with PVC covers inside plot"
          ]
        },
        {
          title: "Doors & Windows",
          items: [
            "Main Door: Teak wood frame 5″×3″ with shutter (up to ₹22,000 including fittings)",
            "Internal Doors: WPC/Sal frame 4″×3″ with membrane shutter (up to ₹7,000 including fittings)",
            "Bathroom Doors: PVC",
            "Windows: 2-track aluminium with 5mm plain glass (max opening 8%)"
          ]
        },
        {
          title: "Kitchen & Bathroom Fixtures",
          items: [
            "SS kitchen sink (up to ₹2,000)",
            "Kitchen faucet & towel ring (up to ₹1,500)",
            "Sanitaryware & CP fittings (up to ₹20,000 per 1000 sqft)",
            "Accessories: EWC, health faucet, wash basin, diverter, overhead shower",
            "Brands: Parryware, Cera, Hindware (as per owner choice)"
          ]
        },
        {
          title: "Fabrication Work",
          items: [
            "MS staircase railing",
            "MS standard gate"
          ]
        },
        {
          title: "Warranties & Exclusions",
          items: [
            "10-year structural warranty, 1-year waterproofing warranty",
            "Fixture warranties as per brands",
            "Exclusions include compound wall, BBMP/BDA liaison, elevation cladding, landscaping, extra civil work, and more (see full list for details)",
            "Only 2 bathrooms per 1300 sqft (additional at extra cost)",
            "Electrical fittings (bulbs, fans, etc.) not included",
            "Additional charges if soil bearing capacity < 180"
          ]
        },
        {
          title: "Government Sanction Assistance",
          items: [
            "Construction plan sanction",
            "Temporary electricity connection",
            "Permanent electricity connection",
            "Water connection",
            "Sewage connection"
          ]
        },
      ]
    },
    premium: {
      title: "PREMIUM PACKAGE",
      features: [
        {
          title: "Core Construction Materials",
          items: [
            "Fe500/550 Grade TMT Steel (JSW, Tata or equivalent)",
            "53 & 43 Grade Cement (Ultratech, Birla, ACC, Zuari or equivalent)",
            "RMC – M25 Grade Concrete Mix",
            "6″ & 4″ Premium Quality Solid Blocks",
            "20MM & 40MM Aggregates",
            "M-Sand for blockwork & P-Sand for plastering",
            "RCC underground sump with waterproof plastering",
            "Two-course size stone masonry under plinth",
            "Ceiling height: 10.5 feet (floor to floor)",
            "Waterproofing with Dr Fixit or Fosroc"
          ]
        },
        {
          title: "Flooring & Wall Tiling",
          items: [
            "Living/Kitchen/Dining/Bedroom: Tiles up to ₹130/sqft",
            "Staircase: Granite up to ₹140/sqft",
            "Balcony/Sitout: Anti-skid tiles up to ₹65/sqft",
            "Bathroom/Toilet: Wall & floor tiles up to ₹70/sqft",
            "Parking: Floor tiles up to ₹50/sqft",
            "Kitchen countertop: Up to ₹160/sqft",
            "Kitchen dado up to 2ft: ₹60/sqft",
            "Bathroom wall tiling up to full height",
            "Terrace screed concreting with Dr Fixit LW+"
          ]
        },
        {
          title: "Painting",
          items: [
            "Interiors: 2 coats putty + 1 coat primer + 2 coats Asian Royale Emulsion",
            "Exterior walls: 1 coat primer + 2 coats Apex Emulsion",
            "2 coats enamel paint for MS window grills",
            "Brands: Asian, Berger, Dulux (as per owner's choice)"
          ]
        },
        {
          title: "Electricals",
          items: [
            "Havells wires or equivalent",
            "GM switches or equivalent",
            "DBs and MCBs included",
            "1 UPS point per unit",
            "Electric car or two-wheeler charging point in parking"
          ]
        },
        {
          title: "Plumbing",
          items: [
            "CPVC pipes: Ashirwad/Supreme/Astral",
            "PVC overhead tank: Sintex (black) with 6ft MS structure",
            "Solar & geyser lines to all bathrooms",
            "Rainwater harvesting facilities & equipment",
            "Sewage chambers with GI/FRP cover inside plot"
          ]
        },
        {
          title: "Doors & Windows",
          items: [
            "Main Door: Teak frame 6″×4″ with teak shutter (up to ₹35,000 including fittings)",
            "Internal Doors: WPC/Sal frame 5″×3″ with laminated shutter (up to ₹12,000 including fittings)",
            "Pooja Door: Teak frame 5″×3″ with teak shutter (up to ₹22,000)",
            "Bathroom Doors: WPC",
            "Windows: 3-track UPVC with 5mm glass + MS grill (₹700/sqft) or Sal wood frames",
            "Max window opening: 15%"
          ]
        },
        {
          title: "Kitchen & Bathroom Fixtures",
          items: [
            "SS or Carysil kitchen sink (up to ₹7,000)",
            "Kitchen faucet & towel ring (up to ₹4,500)",
            "Sanitary ware & CP fittings (up to ₹60,000 per 1000 sqft)",
            "Accessories: EWC, health faucet, wash basin, diverter, overhead shower",
            "Brands: Jaquar, Grohe, Toto (as per owner's choice)"
          ]
        },
        {
          title: "Fabrication Work",
          items: [
            "SS staircase railing",
            "Designer gate"
          ]
        },
        {
          title: "Warranties & Exclusions",
          items: [
            "10-year structural warranty, 1-year waterproofing warranty",
            "Fixture warranties as per brands",
            "Extra charges apply if total construction is less than 4000 sqft for compound wall",
            "Excludes liaison, cladding, landscaping, external works, extra bathrooms, fittings (bulbs/fans), etc.",
            "Only 2 bathrooms per 1300 sqft (extra charged separately)",
            "Additional charges if soil bearing capacity < 180"
          ]
        },
        {
          title: "Government Sanction Assistance",
          items: [
            "Construction plan sanction",
            "Temporary electricity connection",
            "Permanent electricity connection",
            "Water connection",
            "Sewage connection"
          ]
        },
      ]
    },
    luxury: {
      title: "LUXURY PACKAGE",
      features: [
        {
          title: "Core Construction Materials",
          items: [
            "Fe500/550 Grade TMT Steel (Indus, Prime Gold or equivalent)",
            "53 & 43 Grade Cement (ACC, Zuari, Ramco or equivalent)",
            "RMC – M20 Grade Concrete Mix",
            "6″ & 4″ Solid Blocks",
            "20MM & 40MM Aggregates",
            "M-Sand for blockwork & P-Sand for plastering",
            "6″ solid block underground sump with waterproof plaster",
            "Two-course size stone masonry under plinth",
            "Ceiling height: 10 feet (floor to floor)",
            "Waterproofing with Dr Fixit or Fosroc"
          ]
        },
        {
          title: "Flooring & Wall Tiling",
          items: [
            "Living/Kitchen/Dining/Bedroom: Tiles up to ₹90/sqft",
            "Staircase: Granite up to ₹100/sqft",
            "Balcony/Sitout: Anti-skid tiles up to ₹50/sqft",
            "Bathroom/Toilet: Wall & floor tiles up to ₹50/sqft",
            "Parking: Floor tiles up to ₹40/sqft",
            "Kitchen countertop: Up to ₹120/sqft",
            "Kitchen dado up to 2ft: ₹50/sqft",
            "Bathroom wall tiling up to 7ft height",
            "Terrace screed concreting with Dr Fixit LW+ waterproofing"
          ]
        },
        {
          title: "Painting",
          items: [
            "Interiors: 2 coats putty + 1 coat primer + 2 coats Asian Premium Emulsion",
            "Exterior walls: 1 coat primer + 2 coats Ace Emulsion",
            "2 coats enamel paint for MS window grills",
            "Brands: Asian, Berger, Dulux (as per owner's choice)"
          ]
        },
        {
          title: "Electricals",
          items: [
            "Finolex wires or equivalent",
            "Anchor Roma switches or equivalent",
            "DBs and MCBs included",
            "1 UPS point per unit",
            "Electric car or two-wheeler charging point in parking"
          ]
        },
        {
          title: "Plumbing",
          items: [
            "CPVC pipes: Ashirwad/Supreme/Astral",
            "PVC Supreme overhead tank with 6ft MS structure",
            "Solar & geyser connection lines provided",
            "Rainwater harvesting facilities & equipment",
            "Sewage chambers with PVC covers inside plot"
          ]
        },
        {
          title: "Doors & Windows",
          items: [
            "Main Door: Teak frame 6″×4″ with teak shutter (up to ₹30,000 including fittings)",
            "Internal Doors: WPC/Sal frame 4″×3″ with membrane shutter (up to ₹9,000 including fittings)",
            "Pooja Door: Frame 5″×3″ with readymade shutter (up to ₹15,000)",
            "Bathroom Doors: WPC",
            "Windows: 2.5-track UPVC with 5mm glass + MS grill (₹580/sqft)",
            "Max window opening: 10%"
          ]
        },
        {
          title: "Kitchen & Bathroom Fixtures",
          items: [
            "SS kitchen sink (up to ₹3,000)",
            "Kitchen faucet & towel ring (up to ₹2,500)",
            "Sanitaryware & CP fittings (up to ₹35,000 per 1000 sqft)",
            "Accessories: EWC, health faucet, wash basin, diverter, overhead shower",
            "Brands: Hindware, Jaquar, Cera (as per owner's choice)"
          ]
        },
        {
          title: "Fabrication Work",
          items: [
            "MS staircase railing",
            "MS standard gate"
          ]
        },
        {
          title: "Warranties & Exclusions",
          items: [
            "10-year structural warranty, 1-year waterproofing warranty",
            "Fixture warranties as per brands",
            "Extra charges for compound wall if total construction is less than 4000 sqft",
            "Excludes liaison, cladding, landscaping, external works, extra bathrooms, fittings (bulbs/fans), etc.",
            "Only 2 bathrooms per 1300 sqft (extra charged separately)",
            "Additional charges if soil bearing capacity < 180"
          ]
        },
        {
          title: "Government Sanction Assistance",
          items: [
            "Construction plan sanction",
            "Temporary electricity connection",
            "Permanent electricity connection",
            "Water connection",
            "Sewage connection"
          ]
        }
      ]
    }
  };

  return (
    <section id="packages" className="section-padding bg-construction-gray">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-construction-blue bg-construction-yellow bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              Construction Packages
            </span>
            <h2 className="heading-lg mb-6">
              Our Turnkey <span className="text-gradient">Construction Packages</span>
            </h2>
            <p className="subtitle max-w-3xl mx-auto">
              Come to our Experience Centre and get a look and feel of what we do! No substandard products used and no surprises later!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(packageOptions).map(([key, packageOption], index) => (
            <ScrollReveal key={key} delay={300 + (index * 100)}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="p-6 text-center border-b bg-construction-blue text-white">
                  <h3 className="text-2xl font-bold mb-4">{packageOption.title}</h3>
                  <div className="flex justify-center">
                    <a href="#contact" className="btn-primary">Get a Quote</a>
                  </div>
                </div>

                <div className="flex-grow">
                  {packageOption.features.map((feature) => (
                    <div key={feature.title} className="border-b last:border-b-0">
                      <div
                        className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleSection(key, feature.title)}
                      >
                        <div className="w-8 h-8 bg-construction-yellow bg-opacity-20 rounded-full flex items-center justify-center mr-4 shrink-0">
                          {openSections[key]?.[feature.title] ? (
                            <Minus className="w-4 h-4 text-construction-blue" />
                          ) : (
                            <Plus className="w-4 h-4 text-construction-blue" />
                          )}
                        </div>
                        <span className="text-construction-blue font-medium text-sm md:text-base">{feature.title}</span>
                      </div>

                      {openSections[key]?.[feature.title] && (
                        <div className="px-4 pb-4 pt-2 bg-gray-50">
                          <ul className="list-disc space-y-2 text-sm ml-12">
                            {feature.items.map((item, idx) => (
                              <li key={idx} className="text-gray-700">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionPackages;
