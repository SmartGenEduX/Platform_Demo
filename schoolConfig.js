
// schoolConfig.js - Centralized configuration for schools

const schoolConfig = [
  {
    code: "SCH001",
    name: "Smart School",
    logo: "/assets/smart_school_logo.png",
    theme: "glass",
    modules: [
      { id: "attendance", active: true },
      { id: "report_tracker", active: true },
      { id: "fee_management", active: true },
      { id: "document_automation", active: true },
    ],
  },
  {
    code: "SCH002",
    name: "Wisdom Academy",
    logo: "/assets/wisdom_academy_logo.png",
    theme: "gradient",
    modules: [
      { id: "attendance", active: true },
      { id: "timetable", active: true },
      { id: "event_log", active: true },
    ],
  },
  {
    code: "SCH003",
    name: "New Horizon",
    logo: "/assets/new_horizon_logo.png",
    theme: "tally",
    modules: [
      { id: "substitution", active: true },
      { id: "whatsapp_integration", active: true },
    ],
  },
];

export default schoolConfig;
