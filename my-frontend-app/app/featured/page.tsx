
import React from 'react';
import Counter from '../../components/counter';
import ToggleMessage from '../../components/togglemessage';
import Link from 'next/link';

export default function FeaturedPage() {
  return (
    <div>
      <h1>Our Features</h1>
      <p>Discover the features of my website.</p>

      <div style={{ marginTop: '30px' }}> {/* Section for interactive components */ }
        <h2>Interactive Counter</h2>
        <p>This component demonstrates state management and event handling (increment/decrement).</p>
        <Counter />
      </div>

      <div style={{ marginTop: '30px' }}> {/* Section for conditional rendering */ }
        <h2>Conditional Message Display</h2>
        <p>This component demonstrates state management and conditional rendering (show/hide text).</p>
        <ToggleMessage />
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}> {/* Back to home button */ }
        <Link href="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}