'use client';

import { useEffect } from 'react';

export default function RedirectHandler() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.protocol === 'http:') {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }, []);

  return null;
}
