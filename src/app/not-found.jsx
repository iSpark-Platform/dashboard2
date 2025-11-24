import React from 'react';
import { Wrapper } from '@/layout';
import ErrorArea from '@/components/error/error-area';

export const metadata = {
  title: '404'
}

export default function NotFound() {
  return (
    <Wrapper>
      <ErrorArea/>
    </Wrapper>
  )
}