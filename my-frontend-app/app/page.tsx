import Link from 'next/link';
import React from 'react';

export default function HomePage() { 
  return (
    <div>
      <h1>Welcome to My Advanced Front-End Application!</h1> 
      <p>This application demonstrates foundational concepts of front-end development using React and Next.js.</p>

      <nav>
        <ul> 
          <li><Link href="/">Home</Link></li> {/* Link to the home page */ }
          <li><Link href="/about">About Us</Link></li> {/* Link to the about page */ }
          <li><Link href="/featured">Features</Link></li> {/* Link to the features page */ }
        </ul>
      </nav>
    </div>
  );
}