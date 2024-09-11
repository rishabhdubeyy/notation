"use client";

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { useConvexAuth } from 'convex/react';
import { ArrowRight } from 'lucide-react';
import React from 'react'
import Link from 'next/link';
import { SignInButton } from '@clerk/clerk-react';
 
export default function Heading() {
  
  const  {isAuthenticated, isLoading} = useConvexAuth();

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        <span className='font-bold underline'>Sipuation</span> will help you keep all of your plans, ideas, notes in a single organized and personalized space.
      </h1>
      <h3>"Put another way, the costs of your good habits are in the present.<br/> The costs of your bad habits are in the future."<br/><span className='italic underline'>-James Clear, Atomic Habits</span></h3>
      {isLoading && (
        <div className='w-full flex items-center justify-center'>
        <Spinner size="lg"/>
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild><Link href="/Documents">Join Sipuation <ArrowRight className='h-4 w-4 ml-2'/></Link></Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>Get Into Sipuation <ArrowRight/></Button>
        </SignInButton>
      )}
    </div>
  )
}
