import React from 'react';
import UserProfile from '../../components/userprofile';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1> 
      <p>Learn more about our mission and vision for this advanced front-end application.</p>

      <div style={{ marginTop: '30px' }}>  {/* Section for user profiles */ }
        <h2>Our Team Members</h2>
        <p>Below are some example user profiles demonstrating data passing via props.</p>
        <UserProfile name="Alice Wonderland" email="alice@example.com" />
        <UserProfile name="Bob The Builder" email="bob@example.com" />
      </div>
      
      <div style={{ marginTop: '40px', textAlign: 'center' }}> {/* Back to home button */ }
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}