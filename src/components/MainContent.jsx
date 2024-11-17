import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#f0f8ff' }}>
      <UserProfile name="John Doe" age={28} bio="Loves hiking and outdoor adventures." />
      <UserProfile name="Jane Smith" age={34} bio="Avid reader and coffee enthusiast." />
    </main>
  );
}

export default MainContent;
