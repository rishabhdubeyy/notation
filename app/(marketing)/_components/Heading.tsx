"use client";

import { Button } from '@/components/ui/button';
import { ArrowBigDown, ArrowBigRight, ArrowRight } from 'lucide-react';
import React from 'react'
 
export default function Heading() {
  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        <span className='font-bold underline'>Sipuation</span> will help you keep all of your plans, ideas, notes in a single organized and personalized space.
      </h1>
      <h3>"Put another way, the costs of your good habits are in the present.<br/> The costs of your bad habits are in the future.<br/><span className='italic underline'>-James Clear, Atomic Habits</span>"</h3>
      <Button className='font-bold'>Join Sipuation <ArrowRight className='h-4 w-4 ml-2'/> </Button>
    </div>
  )
}
