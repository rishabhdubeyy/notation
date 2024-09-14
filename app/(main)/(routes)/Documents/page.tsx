"use client";

import Image from "next/image";
import React from 'react';
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function DocumentsPage() {

    const { user } = useUser();

  return (
    
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <Image 
            src="/doc1.png"
            height= "300"
            width= "300"
            alt= "doc image"
            className="dark:hidden"
        /> 
        <h2 className="text-lg font-medium">
            Welcome to {user?.firstName}&apos;s Sipuation
        </h2>
        <Button>
            <PlusCircle className="h-4 w-4 mr-2"/>
            Create a note
        </Button>
    </div>
  )
}
