'use client';

import SignIn from '../src/login'; // Assuming page.tsx is in the same directory as src
import SignUp from '../src/signup';
import { useState } from 'react';

export default function Page() {
  const [currentPage, setCurrentPage] = useState('login');
  return (
    <div>
      {currentPage === 'login' && <SignIn setPage={setCurrentPage} />}
      {currentPage === 'signup' && <SignUp setPage={setCurrentPage} />}
    </div>
  );
}