'use client';

import SignIn from '../src/pages/login'; // Assuming page.tsx is in the same directory as src
import SignUp from '../src/pages/signup';
import { useState } from 'react';
import "./globals.css";

export default function Page() {
  const [currentPage, setCurrentPage] = useState('login');
  return (
    <div>
      {currentPage === 'login' && <SignIn setPage={setCurrentPage} />}
      {currentPage === 'signup' && <SignUp setPage={setCurrentPage} />}
    </div>
  );
}