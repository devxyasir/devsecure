import React from 'react';

const companies = [
  { name: 'HushMesh', logo: 'https://www.hushmesh.com/uploads/1/0/0/7/100726128/frame-4.png' },
  { name: 'Cyera', logo: 'https://i.ibb.co/JR152BW/cyera.webp' },
  { name: 'DarkTrace', logo: 'https://i.ibb.co/vVFYSpS/darktrace.webp' },
  { name: 'SScTech', logo: 'https://www.ssctech.com/hs-fs/hubfs/website/logos/2023-SSNC-Logo-RGB-Blue-0077C8-62px.png?width=115&height=62&name=2023-SSNC-Logo-RGB-Blue-0077C8-62px.png' },
  { name: 'Micron', logo: 'https://www.micron.com/content/experience-fragments/micron/us/en/site/header/master/_jcr_content/root/header_1665313514/logo.coreimg.svg/1728311645166/micron-logo-white.svg' },
];

const Companies = () => {
  return (
    <section className="py-20 bg-black/50 backdrop-blur-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400">We've helped these companies secure their digital future</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;