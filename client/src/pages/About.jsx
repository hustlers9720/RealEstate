import React from 'react';
// import aboutImage from '../assets/about.jpg'; // Replace with your actual image path
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate();
  const leaders = [
    {
      name: 'Aditya Goyal',
      title: 'Founder & CEO',
      description: '20+ years in real estate. Specializes in luxury properties and commercial investments.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg', // Replace with actual photo if available
      initials: 'AG',
    },
    {
      name: 'Priya Sharma',
      title: 'Director of Operations',
      description: 'Oversees our client services team and ensures seamless transaction processes.',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
      initials: 'PS',
    },
    {
      name: 'Amit Patel',
      title: 'Head of Sales',
      description: 'Leads our top-performing sales team with a focus on innovative marketing strategies.',
      img: 'https://randomuser.me/api/portraits/men/65.jpg',
      initials: 'AP',
    },
  ];
  return (
    <div className='py-12 px-4 max-w-6xl mx-auto'>
      {/* Hero Section */}
      <div className='mb-12 text-center'>
        <h1 className='text-4xl font-bold mb-6 text-slate-800'>About Goyal Estate</h1>
        <p className='text-lg text-slate-600 max-w-3xl mx-auto'>
          Your trusted partner in finding the perfect property since 2010. We combine local expertise with
          cutting-edge technology to deliver exceptional real estate experiences.
        </p>
      </div>

      {/* Main Content with Image */}
      <div className='flex flex-col md:flex-row gap-12 items-center mb-16'>
        <div className='md:w-1/2'>
          <img
            src='https://images.unsplash.com/photo-1552664730-d307ca884978'
            alt='Goyal Estate Team'
            className='rounded-lg shadow-xl w-full h-auto object-cover'
          />
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-2xl font-bold mb-4 text-slate-800'>Our Story</h2>
          <p className='mb-4 text-slate-700 leading-relaxed'>
            Founded in Mumbai in 2010, Goyal Estate began as a small family business with a passion
            for connecting people with their dream homes. Today, we've grown into one of the region's
            most trusted real estate agencies, serving thousands of satisfied clients.
          </p>
          <p className='mb-4 text-slate-700 leading-relaxed'>
            What sets us apart is our deep local knowledge combined with a client-first approach.
            We don't just sell properties - we build relationships that last generations.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className='mb-16'>
        <h2 className='text-2xl font-bold mb-8 text-center text-slate-800'>Our Core Values</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-slate-50 p-6 rounded-lg shadow-sm'>
            <h3 className='text-xl font-semibold mb-3 text-slate-800'>Integrity</h3>
            <p className='text-slate-700'>
              We believe in complete transparency and honesty in all our dealings.
              Our clients trust us because we always put their interests first.
            </p>
          </div>
          <div className='bg-slate-50 p-6 rounded-lg shadow-sm'>
            <h3 className='text-xl font-semibold mb-3 text-slate-800'>Expertise</h3>
            <p className='text-slate-700'>
              Our team undergoes continuous training to stay ahead of market trends.
              We bring deep knowledge of local neighborhoods, pricing, and investment potential.
            </p>
          </div>
          <div className='bg-slate-50 p-6 rounded-lg shadow-sm'>
            <h3 className='text-xl font-semibold mb-3 text-slate-800'>Personalized Service</h3>
            <p className='text-slate-700'>
              Every client gets a dedicated agent who understands their unique needs.
              From first-time buyers to seasoned investors, we tailor our approach for you.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-2xl font-bold mb-8 text-center text-slate-800">Meet Our Leadership</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <div key={index} className="text-center">
            {leader.img ? (
              <img
                src={leader.img}
                alt={leader.name}
                className="h-48 w-48 rounded-full object-cover mx-auto mb-4"
              />
            ) : (
              <div className="bg-slate-300 h-48 w-48 rounded-full flex items-center justify-center text-4xl font-bold text-white mx-auto mb-4">
                {leader.initials}
              </div>
            )}
            <h3 className="text-xl font-semibold">{leader.name}</h3>
            <p className="text-slate-600">{leader.title}</p>
            <p className="text-slate-700 mt-2">{leader.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className='mt-16 bg-slate-100 rounded-lg p-8 text-center'>
        <h2 className='text-2xl font-bold mb-4 text-slate-800'>Ready to Begin Your Real Estate Journey?</h2>
        <p className='mb-6 text-slate-700 max-w-2xl mx-auto'>
          Whether you're buying, selling, or investing, our team is here to guide you
          through every step with expertise and care.
        </p>
        <button onClick={() => navigate("/contact")} className='bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition'>
          Contact Our Team
        </button>
      </div>
    </div>
  )
}