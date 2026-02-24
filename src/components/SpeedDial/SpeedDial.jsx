import { Contact, Phone, Plus, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SpeedDial = () => {
    const [open, setOpen] = useState(false);

    const actions = [
        { icon: <FaWhatsapp size={24} />, label: "WhatsApp", link: "https://wa.me/1234567890" },
        { icon: <MdEmail size={24} />, label: "Email", link: '' },
        { icon: <Phone size={24} />, label: "Phone", link: '' },
        { icon: <FaInstagram size={24} />, label: "Instagram", link: '' },
    ];

    return (
        <>
            {/* Action buttons */}
            {actions.map((action, index) => {
                const bottomOffset = 70 + index * 64;
                return (
                    <Tooltip key={index}>
                        <TooltipTrigger asChild>
                            <div
                                onClick={() => window.location.href = action.link}
                                style={{
                                    bottom: open ? `${bottomOffset}px` : '8px',
                                    right: '8px',
                                    opacity: open ? 1 : 0,
                                    pointerEvents: open ? 'auto' : 'none',
                                    transition: `bottom 0.3s ease ${index * 0.05}s, opacity 0.2s ease ${index * 0.05}s`,
                                }}
                                className="bg-pink-500 hover:bg-pink-600 cursor-pointer fixed p-3 rounded-lg text-white z-20"
                            >
                                {action.icon}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="z-30">
                            <p className="text-xs">{action.label}</p>
                        </TooltipContent>
                    </Tooltip>
                );
            })}

            {/* Trigger button */}
            <div
                onClick={() => setOpen((prev) => !prev)}
                className="bg-pink-500 hover:bg-pink-600 cursor-pointer fixed bottom-2 right-2 p-3 rounded-lg text-white z-20"
            >
                <Plus className={`${open ? 'rotate-45 transition ease-in-out' : 'rotate-180 transition'}`} />
            </div>
        </>
    );
};

export default SpeedDial;