"use client"

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { ArrowRight, Castle, File, HelpCircle, Sun } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaFacebook, FaSearch } from 'react-icons/fa'
import { castles } from '../../api/Products'
import { BsFacebook, BsInfoCircle, BsInstagram, BsTiktok, BsTwitter, BsWhatsapp } from 'react-icons/bs'

const SearchBox = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const help = [
    { title: 'Contact', href: '/contact' },
    { title: 'FAQ', href: '/frequently-asked-questions' },
  ]

  const information = [
    { title: 'Terms & Conditions', href: '/terms-and-conditions' },
    { title: 'Risk Assessments', href: '/risk-assessments' },
    { title: 'Payments & Refunds', href: '/payments' },
    { title: 'Weather Policy', href: '/bad-weather-policy' },
    { title: 'Gallery', href: '/gallery' },
  ]

  const social = [
    { title: 'Instagram', href: 'https://instagram.com', icon: <BsInstagram /> },
    { title: 'Facebook', href: 'https://facebook.com', icon: <BsFacebook /> },
    { title: 'Twitter', href: 'https://twitter.com', icon: <BsTwitter /> },
    { title: 'TikTok', href: 'https://tiktok.com', icon: <BsTiktok /> },
    { title: 'WhatsApp', href: 'https://wa.me/1234567890', icon: <BsWhatsapp /> },
  ]

  const inflatables = castles.map((castle) => ({
        title: castle.name,
        href: `/bouncy-castle/${castle.slug}`,
    }))
  




  return (
    <div className="flex flex-col gap-4">
      <Tooltip>
              <TooltipTrigger>
                <button onClick={() => setOpen((prev) => !prev)} className="flex items-center justify-center rounded-lg hover:border hover:border-gray-200 text-gray-400 hover:text-gray-600 transition-colors hover:bg-gray-100 p-2 cursor-pointer">
                  <FaSearch size={17} />
                </button>
              </TooltipTrigger>
              <TooltipContent side='bottom'>
                <p className="text-xs">Search</p>
              </TooltipContent>
            </Tooltip>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Help">
                {help.map((item) => (
                    <div onClick={() => { navigate(item.href), setOpen(false) }}>
                    <CommandItem onClick={() => window.open(item.href)} key={item.title}>
                        <HelpCircle />
                        <span>{item.title}</span>
                        <CommandShortcut><ArrowRight /></CommandShortcut>
                    </CommandItem>
                    </div>
                ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Information">
                {information.map((info) => (
                    <div onClick={() => { navigate(info.href), setOpen(false) }}>
                    <CommandItem onClick={() => window.open(info.href)} key={info.title}>
                        <File />
                        <span>{info.title}</span>
                        <CommandShortcut><ArrowRight /></CommandShortcut>
                    </CommandItem>
                    </div>
                ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Inflatables">
            <div onClick={() => { navigate('/bouncy-castles', setOpen(false) )}}>
            <CommandItem>
                    <Castle />
                    <span>All Castles</span>
                    <CommandShortcut><ArrowRight /></CommandShortcut>
            </CommandItem>
            </div>
                {inflatables.map((castle) => (
                    <div onClick={() => { navigate(castle.href), setOpen(false)} }>
                    <CommandItem key={castle.title}>
                        <Castle />
                        <span>{castle.title}</span>
                        <CommandShortcut><ArrowRight /></CommandShortcut>
                    </CommandItem>
                    </div>
                ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Social Media">
                {social.map((social) => (
                    <CommandItem socialkey={social.title}>
                        {social.icon}
                        <span>{social.title}</span>
                        <CommandShortcut><ArrowRight /></CommandShortcut>
                    </CommandItem>
                ))}
            </CommandGroup>

            <CommandSeparator />

            <CommandGroup heading="Weather">
                <div onClick={() => window.open('https://www.bbc.co.uk/weather/2653229')}>
                    <CommandItem>
                        <Sun />
                        <span>Check Weather</span>
                        <CommandShortcut><ArrowRight /></CommandShortcut>
                    </CommandItem>
                </div>
            </CommandGroup>

            

           
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

export default SearchBox