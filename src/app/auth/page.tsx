// src/app/auth/page.tsx
'use client';

import React, { Suspense } from 'react';
import AuthForm from './AuthForm';

// Loading component
function AuthPageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<AuthPageLoading />}>
      <AuthForm />
    </Suspense>
  );
}
