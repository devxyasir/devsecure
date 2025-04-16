import React from 'react';
import { Briefcase, Clock, MapPin, ChevronRight } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior AI/ML Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Artificial Intelligence",
    description: "Looking for an experienced AI/ML engineer to develop and implement innovative machine learning solutions."
  },
  {
    id: 2,
    title: "Full Stack Developer",
    type: "Full-time",
    location: "Hybrid",
    department: "Engineering",
    description: "Seeking a skilled full stack developer with experience in React, Node.js, and cloud technologies."
  },
  {
    id: 3,
    title: "Cybersecurity Analyst",
    type: "Full-time",
    location: "Remote",
    department: "Security",
    description: "Join our security team to help protect our clients' digital assets and infrastructure."
  },
  {
    id: 4,
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Operations",
    description: "Looking for a DevOps engineer to streamline our development and deployment processes."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,200,255,0.1),rgba(0,0,0,0)_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. We're always looking for talented individuals to join our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Join DevSecure?</h2>
            <p className="text-gray-400">Discover the benefits of being part of our team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "Work with cutting-edge technologies and shape the future of tech"
              },
              {
                title: "Growth & Learning",
                description: "Continuous learning opportunities and career development programs"
              },
              {
                title: "Work-Life Balance",
                description: "Flexible work arrangements and comprehensive benefits package"
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400">Find your next opportunity</p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-400">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                    </div>
                    <p className="text-gray-400 mt-2">{job.description}</p>
                  </div>
                  <button className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/25">
                    Apply Now
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;