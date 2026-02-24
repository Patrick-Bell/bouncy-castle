import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AlertCircle, AlertTriangle, Download, Eye, File, LocateIcon, Search } from "lucide-react";
import { MdEmergency } from "react-icons/md";

const sections = [
    {
        id: "overview",
        icon: <File className="text-pink-500" />,
        title: "Overview & Responsibility",
        items: [
            "This risk assessment covers the hire, delivery, setup, supervised use, and collection of inflatable play equipment operated by Bouncy Castle Hire.",
            "The assessor responsible for this document is Sarah (Owner), reviewed annually and updated as required following any incident, equipment change, or change in operating practice.",
            "This document applies to all hire events including private garden parties, indoor events, school fairs, community events, and corporate family days.",
            "The hirer accepts responsibility for the safe supervision of the equipment during the hire period by signing or verbally accepting the hire agreement at the point of delivery.",
            "All staff who deliver, setup, or operate equipment have been briefed on these procedures and are required to follow them at all times.",
            "A copy of this risk assessment is available to hirers, venue managers, and event organisers on request and is provided to schools and public event organisers as standard.",
        ],
    },
    {
        id: "hazards",
        icon: <AlertCircle className="text-pink-500" />,
        title: "Identified Hazards & Controls",
        risks: [
            {
                hazard: "Falls from or within the inflatable",
                persons: "Children using the castle",
                likelihood: "Medium",
                severity: "Medium",
                controls: [
                    "Maximum occupancy limits enforced and displayed on the unit.",
                    "Adult supervisor required at all times.",
                    "Safety mats placed around all entrance/exit points.",
                    "Age groups separated where possible — no mixing of very young and older children.",
                    "Users briefed on no-somersault and no-jumping-near-entrance rules.",
                ],
            },
            {
                hazard: "Entrapment or suffocation from deflation",
                persons: "Children using the castle",
                likelihood: "Low",
                severity: "High",
                controls: [
                    "Blower must remain running and unobstructed at all times during use.",
                    "Supervisor instructed to immediately evacuate the castle in any deflation event.",
                    "Emergency deflation procedure communicated to hirer at time of setup.",
                    "Castle entrance must never be blocked or obstructed.",
                ],
            },
            {
                hazard: "Electrical hazard from blower unit",
                persons: "Children, adults, hirer",
                likelihood: "Low",
                severity: "High",
                controls: [
                    "All blower units are PAT tested annually by a qualified electrician.",
                    "Blower positioned away from users and pedestrian traffic.",
                    "No customer-owned extension cables permitted — only our tested cables may be used.",
                    "Blower must not be used in standing water or heavy rain.",
                    "Any damage to power leads reported immediately and equipment taken out of service.",
                ],
            },
            {
                hazard: "Castle becoming unstable or moving",
                persons: "Children using the castle, bystanders",
                likelihood: "Low",
                severity: "High",
                controls: [
                    "All castles anchored with ground stakes on grass surfaces.",
                    "Sandbag weights used on hard surfaces (concrete, tarmac, decking).",
                    "Castle not used in wind speeds exceeding 24mph (PIPA guideline).",
                    "Safety perimeter of at least 2ft maintained around all sides of the castle.",
                    "Setup location inspected by our team prior to inflation.",
                ],
            },
            {
                hazard: "Injury from collision or overcrowding",
                persons: "Children using the castle",
                likelihood: "Medium",
                severity: "Medium",
                controls: [
                    "Strict occupancy limits enforced — maximum capacity displayed on unit.",
                    "Supervisor to actively manage numbers and behaviour on the castle.",
                    "Children with significant size or age differences supervised separately.",
                    "No rough play, wrestling, or pushing allowed.",
                ],
            },
            {
                hazard: "Adverse weather during hire",
                persons: "Children using the castle, bystanders",
                likelihood: "Medium",
                severity: "High",
                controls: [
                    "Weather forecasts monitored in the 48 hours prior to every hire.",
                    "Hire cancelled or postponed if wind speeds forecast above 24mph.",
                    "Hirer instructed to deflate immediately in the event of lightning, heavy rain, or strong gusts.",
                    "Rain covers provided for light showers — not suitable for storms.",
                    "Our contact number provided to hirer for immediate guidance on the day.",
                ],
            },
            {
                hazard: "Manual handling during delivery/collection",
                persons: "Our staff",
                likelihood: "Medium",
                severity: "Medium",
                controls: [
                    "Staff trained in safe manual handling techniques.",
                    "Equipment transported on trolleys where possible.",
                    "Two-person lifts required for large or heavy units.",
                    "Staff to wear appropriate footwear during setup and collection.",
                    "Any injury during setup to be reported and documented.",
                ],
            },
            {
                hazard: "Trip hazard from blower tube or anchor stakes",
                persons: "Children, adults, bystanders",
                likelihood: "Medium",
                severity: "Low",
                controls: [
                    "Blower tube routed away from pedestrian areas where possible.",
                    "Anchor stakes positioned and angled to minimise trip risk.",
                    "Hirer advised to keep non-users at a safe distance from the perimeter.",
                    "Safety mats used to cover tube entry point at castle base.",
                ],
            },
        ],
    },
    {
        id: "equipment",
        icon: <Search className="text-pink-500" />,
        title: "Equipment Inspection & Maintenance",
        items: [
            "All inflatable units are PIPA (Publicly Inflatable Products Association) tested and certified annually by an approved inspector. PIPA tags are affixed to each unit.",
            "All blower units are PAT (Portable Appliance Tested) by a qualified electrician every 12 months. PAT test stickers are affixed to each blower.",
            "Each castle is inspected before and after every hire for rips, faulty seams, damaged anchor points, broken zips, and any signs of structural compromise.",
            "Any equipment showing signs of wear, damage, or failing inspection is immediately taken out of service and not returned to hire until fully repaired and re-inspected.",
            "Repairs are carried out using approved repair kits and techniques in line with manufacturer guidelines.",
            "A maintenance log is kept for each unit recording dates of inspection, any issues identified, and repairs carried out.",
            "Castles are fully cleaned and dried after every hire using appropriate cleaning products safe for children's use.",
            "The full fleet is subject to a comprehensive annual inspection in addition to regular pre/post-hire checks.",
        ],
    },
    {
        id: "emergency",
        icon: <MdEmergency className="text-pink-500" />,
        title: "Emergency Procedures",
        items: [
            "In the event of serious injury: call 999 immediately, do not move the injured person unless they are in immediate danger, administer first aid if trained to do so, and contact us on 07700 900 123.",
            "In the event of deflation during use: switch off the blower, calmly evacuate all users from the castle immediately, do not re-inflate until the cause has been identified and resolved.",
            "In the event of extreme weather developing during hire: deflate the castle immediately by switching off the blower, remove all users, and contact us for guidance.",
            "In the event of electrical fault: switch off and disconnect the power supply immediately, do not attempt to repair — contact us straight away on 07700 900 123.",
            "In the event of a fire: evacuate all users immediately, call 999, do not attempt to fight the fire, and contact us as soon as it is safe to do so.",
            "All incidents, near misses, and injuries must be reported to us within 24 hours by calling 07700 900 123 or emailing hello@bouncycastle.co.uk so they can be recorded in our incident log.",
            "We will conduct a post-incident review of any reportable incident and update this risk assessment if required.",
        ],
    },
    {
        id: "supervision",
        icon: <Eye className="text-pink-500"/>,
        title: "Supervision Requirements",
        items: [
            "A competent adult supervisor aged 18 or over must be actively present and watching the castle at all times during use. This is a non-negotiable requirement.",
            "The supervisor must ensure all users have removed shoes, glasses, jewellery, and sharp objects before entering the castle.",
            "The supervisor must enforce maximum occupancy at all times and manage the rotation of users where queues form.",
            "The supervisor must be able to reach the blower unit quickly in order to deflate the castle in an emergency.",
            "The supervisor is responsible for ensuring no food, drink, chewing gum, or face paint is brought onto or near the castle.",
            "The supervisor must separate children of significantly different sizes or ages to prevent injury from collisions.",
            "The supervisor should ensure users who appear unwell, overly tired, or distressed exit the castle and rest before returning.",
            "Our delivery staff will provide a full verbal briefing to the hirer on supervision responsibilities at the point of setup.",
        ],
    },
    {
        id: "site",
        icon: <LocateIcon className="text-pink-500" />,
        title: "Site Requirements & Assessment",
        items: [
            "Our team conducts a site assessment at the point of setup. If the site is found to be unsuitable, we reserve the right to refuse setup.",
            "The setup area must be flat or near-flat (gradient no more than 10%), clear of all obstacles, animal waste, sharp objects, and overhead hazards.",
            "A minimum clearance of 2ft must be maintained on all sides of the inflated castle. This space must be kept clear throughout the hire.",
            "Access to a standard 13-amp mains electrical outlet within 25 metres is required. Generators are not permitted unless agreed in writing in advance.",
            "The ground surface must be suitable — grass is preferred. Hard surfaces (patio, concrete, tarmac) require sandbag anchoring. Gravel, slopes, and uneven ground may not be suitable.",
            "Overhead hazards including tree branches, power lines, washing lines, and guttering must be cleared or the setup location repositioned.",
            "Indoor venues must have a minimum ceiling height of 14ft for most castles. The floor surface must be clean, flat, and non-slippery.",
            "The hirer is responsible for ensuring the site is ready and meets these requirements prior to our arrival.",
        ],
    },
];

const certifications = [
    {
        name: "PIPA Certificate",
        issuer: "Publicly Inflatable Products Association",
        date: "January 2025",
        expires: "January 2026",
        description: "Annual safety certification for all inflatable play equipment. Confirms that units meet the required safety standards for public and private hire use.",
        color: "from-pink-50 to-pink-100",
        border: "border-pink-200",
        badge: "bg-pink-500",
    },
    {
        name: "Public Liability Insurance",
        issuer: "Leisure Insure UK",
        date: "March 2025",
        expires: "March 2026",
        description: "Full public liability insurance up to £5 million per occurrence. Covers all hire activities including delivery, setup, and supervised use at private and public events.",
        color: "from-violet-50 to-violet-100",
        border: "border-violet-200",
        badge: "bg-violet-500",
    },
    {
        name: "PAT Test Certificate",
        issuer: "Surrey Electrical Services",
        date: "November 2024",
        expires: "November 2025",
        description: "Portable Appliance Test certification for all blower units. Carried out by a qualified electrician confirming all electrical equipment is safe for use.",
        color: "from-emerald-50 to-emerald-100",
        border: "border-emerald-200",
        badge: "bg-emerald-500",
    },
    {
        name: "Risk Assessment Review",
        issuer: "Internal — Sarah (Owner)",
        date: "January 2025",
        expires: "January 2026",
        description: "Annual review and sign-off of this risk assessment document. Confirms that all identified hazards, controls, and procedures are current and appropriate.",
        color: "from-amber-50 to-amber-100",
        border: "border-amber-200",
        badge: "bg-amber-500",
    },
];

const riskColor = (level) => {
    if (level === "Low") return "bg-emerald-100 text-emerald-700";
    if (level === "Medium") return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-600";
};

const RiskAssessmentPage = () => {
    const [activeId, setActiveId] = useState("overview");

    useEffect(() => {
        const observers = [];
        sections.forEach(({ id }) => {
            const el = document.getElementById(`ra-${id}`);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveId(id); },
                { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(`ra-${id}`);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="relative bg-gradient-to-br from-pink-500 to-pink-600 overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400/30 rounded-full -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-10 w-48 h-48 bg-pink-400/20 rounded-full translate-y-1/2" />
                {/* Yellow accent blob */}
                <div className="absolute top-8 right-1/3 w-20 h-20 bg-pink-300/30 rounded-full" />

                <div className="relative max-w-5xl mx-auto px-8 py-20 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-widest uppercase">
                        <span className="w-6 h-px bg-white" />
                        Your Safety Matters
                    </span>
                    </div>
                    <h1 className="text-6xl font-extrabold text-white tracking-tight leading-none">
                        Safety & Risk <br />
                        <span className="text-pink-300">Assessment.</span>
                    </h1>
                    <p className="text-pink-100 text-lg max-w-xl leading-relaxed">
                    As a family business, safety is our absolute priority. This document outlines all identified risks, our control measures, and our certifications. Available for download below.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-1">
                        {["PIPA Certified", "£5M Public Liability", "PAT Tested", "Annually Reviewed"].map((b, i) => (
                            <span key={i} className="bg-pink-50 border border-pink-100 text-pink-700 text-xs font-bold px-3 py-1.5 rounded-full">{b}</span>
                        ))}
                    </div>
                <p className="text-xs text-gray-300">Last updated: January 2025 · Bouncy Castle Hire, Surrey, UK</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-8 py-16">
                <div className="flex gap-12 items-start">

                    {/* Main content */}
                    <div className="flex-1 flex flex-col gap-8 min-w-0">

                        {/* Warning box */}
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
                            <span className="text-2xl flex-shrink-0"><AlertTriangle className="text-amber-500" /></span>
                            <div>
                                <p className="font-bold text-amber-800 text-sm mb-1">Important Notice</p>
                                <p className="text-amber-700 text-sm leading-relaxed">
                                    By accepting a hire from us you confirm that you have read and understood this risk assessment. An adult supervisor must be present at all times. If you have any questions, call us on 07700 900 123 before your event.
                                </p>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div id="ra-certs" className="scroll-mt-8">
                            <h2 className="font-extrabold text-gray-900 text-xl mb-4">Our Certifications & Documents</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {certifications.map((cert, i) => (
                                    <div key={i} className={`bg-gradient-to-br ${cert.color} border ${cert.border} rounded-3xl p-5 flex flex-col gap-3`}>
                                        {/* Header */}
                                        <div className="flex items-start justify-between gap-2">
                                            <div>
                                                <span className={`inline-block ${cert.badge} text-white text-xs font-bold px-2 py-0.5 rounded-full mb-2`}>
                                                    {cert.expires ? `Expires ${cert.expires}` : "Current"}
                                                </span>
                                                <h3 className="font-extrabold text-gray-900 text-sm">{cert.name}</h3>
                                                <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                                            </div>
                                        </div>

                                        {/* Placeholder image */}
                                        <div className="w-full h-36 bg-white rounded-2xl border border-white/60 flex flex-col items-center justify-center gap-2 text-gray-300">
                                            <div className="text-4xl">📄</div>
                                            <p className="text-xs font-semibold text-gray-400">Certificate Placeholder</p>
                                            <p className="text-xs text-gray-300">Replace with actual scan</p>
                                        </div>

                                        <p className="text-xs text-gray-500 leading-relaxed">{cert.description}</p>

                                        {/* Issued date + download */}
                                        <div className="flex items-center justify-between gap-2 pt-1 border-t border-white/50">
                                            <span className="text-xs text-gray-400">Issued: {cert.date}</span>
                                            <a
                                                href="#"
                                                onClick={(e) => e.preventDefault()}
                                                className="inline-flex items-center gap-1.5 bg-white text-gray-700 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors"
                                                title="PDF not yet uploaded — replace href with actual file path"
                                            >
                                                <Download className="w-5 h-4" /> Download PDF
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Download all */}
                            <div className="mt-4 bg-white border border-gray-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <p className="font-bold text-gray-800 text-sm">Download Full Risk Assessment</p>
                                    <p className="text-gray-400 text-xs mt-0.5">Complete document including all sections, suitable for venues and event organisers.</p>
                                </div>
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="flex-shrink-0 inline-flex items-center gap-2 bg-pink-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-pink-600 transition-colors"
                                    title="Replace href with path to your PDF"
                                >
                                    <Download className="w-5 h-4" /> Full Risk Assessment PDF
                                </a>
                            </div>
                        </div>

                        {/* Sections */}
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                id={`ra-${section.id}`}
                                className="bg-white rounded-3xl border border-gray-100 p-7 flex flex-col gap-5 scroll-mt-8"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-2xl bg-pink-50 border border-pink-100 flex items-center justify-center text-xl flex-shrink-0">
                                        {section.icon}
                                    </div>
                                    <h2 className="font-extrabold text-gray-900 text-lg">{section.title}</h2>
                                </div>

                                {/* Regular item list */}
                                {section.items && (
                                    <ul className="flex flex-col gap-3">
                                        {section.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                                                <span className="w-5 h-5 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                                                    {j + 1}
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Risk table */}
                                {section.risks && (
                                    <div className="flex flex-col gap-4">
                                        {section.risks.map((risk, ri) => (
                                            <div key={ri} className="border border-gray-100 rounded-2xl overflow-hidden">
                                                <div className="bg-gray-50 px-5 py-3 flex flex-wrap items-center gap-3">
                                                    <span className="font-bold text-gray-800 text-sm flex-1">{risk.hazard}</span>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs text-gray-400">Likelihood:</span>
                                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${riskColor(risk.likelihood)}`}>{risk.likelihood}</span>
                                                        <span className="text-xs text-gray-400 ml-1">Severity:</span>
                                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${riskColor(risk.severity)}`}>{risk.severity}</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 py-3">
                                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Persons at risk: {risk.persons}</p>
                                                    <ul className="flex flex-col gap-1.5">
                                                        {risk.controls.map((ctrl, ci) => (
                                                            <li key={ci} className="flex items-start gap-2 text-sm text-gray-500">
                                                                <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span>
                                                                {ctrl}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Footer */}
                        <div className="bg-gray-100 rounded-2xl p-5 text-center flex flex-col gap-2">
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wide">Document Information</p>
                            <p className="text-gray-400 text-xs">
                                Last reviewed: <strong className="text-gray-500">January 2025</strong> · Next review due: <strong className="text-gray-500">January 2026</strong>
                            </p>
                            <p className="text-gray-400 text-xs">
                                For a printed copy or to request documentation for your venue, email <strong className="text-gray-500">hello@bouncycastle.co.uk</strong>
                            </p>
                        </div>
                    </div>

                    {/* Sticky right nav */}
                    <aside className="hidden lg:flex flex-col gap-1 sticky top-20 w-52 flex-shrink-0">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 px-3">On this page</p>

                        {/* Certifications link */}
                        <button
                            onClick={() => scrollTo("certs")}
                            className={`text-left text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2.5 group w-full
                                ${activeId === "certs" ? "bg-pink-50 text-pink-500" : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"}`}
                        >
                            <span className={`w-0.5 h-4 rounded-full flex-shrink-0 transition-all duration-200 ${activeId === "certs" ? "bg-pink-500" : "bg-gray-200 group-hover:bg-gray-300"}`} />
                            Certifications
                        </button>

                        {sections.map(({ id, title }) => {
                            const isActive = activeId === id;
                            return (
                                <button
                                    key={id}
                                    onClick={() => scrollTo(id)}
                                    className={`text-left text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2.5 group w-full
                                        ${isActive ? "bg-pink-50 text-pink-500" : "text-gray-400 hover:text-gray-700 hover:bg-gray-100"}`}
                                >
                                    <span className={`w-0.5 h-4 rounded-full flex-shrink-0 transition-all duration-200 ${isActive ? "bg-pink-500" : "bg-gray-200 group-hover:bg-gray-300"}`} />
                                    {title}
                                </button>
                            );
                        })}

                        <div className="mt-4 pt-4 border-t border-gray-100 px-3">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="w-full flex items-center justify-center gap-1.5 bg-pink-500 text-white font-bold text-xs px-3 py-2.5 rounded-xl hover:bg-pink-600 transition-colors"
                            >
                                <Download className="w-5 h-4" /> Download PDF
                            </a>
                        </div>
                    </aside>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RiskAssessmentPage;