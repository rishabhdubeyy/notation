"use client";

import React from 'react'
import {
    Avatar,
    AvatarImage
} from "@/components/ui/avatar";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLable,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronLeftRight } from 'lucide-react'

import { useUser } from "@clerk/clerk-react";


export default function UserItem () {
  const { user } = useUser();



  return (
    <div>UserItem </div>
  )
}

