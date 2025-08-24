const CONFIG = {
  grandpaName: "Shri PUNABHAI CHAUDHARI",
  dateText: "Sunday, 31 AUGUST 2025",
  timeText: "10:00 PM",
  venueName: "Utsav Pure Veg Restaurant & Banquet Hall",
  venueAddress: "[Street, City, State, Pincode]",
  googleMapsPlaceUrl: "https://maps.app.goo.gl/XZxMi5rCx652WABc6",
  dressCode: "Traditional or Smart Casual",
  notes: "Your blessings are the most precious gift.",
  contactPerson: "ANIL CHAUDHARI",
  contactPhone: "+91-8459392268"
};

function setText(id, value){ const el=document.getElementById(id); if(el) el.textContent=value; }

document.addEventListener("DOMContentLoaded", () => {
  setText("grandpaName", CONFIG.grandpaName);
  setText("grandpaName2", CONFIG.grandpaName.replace(/^Shri\s*/i,'').trim());
  setText("grandpaNameHi", "पुनाभाई चौधरी");

  setText("eventDate", CONFIG.dateText);
  setText("dateText", CONFIG.dateText);
  setText("eventTime", CONFIG.timeText);
  setText("timeText", CONFIG.timeText);

  setText("venueName", CONFIG.venueName);
  setText("venueName2", CONFIG.venueName);
  setText("venueAddress", CONFIG.venueAddress);
  setText("dressCode", CONFIG.dressCode);
  setText("notes", CONFIG.notes);
  setText("contactPerson", CONFIG.contactPerson);

  const mapsLink = document.getElementById("mapsLink");
  if(mapsLink) mapsLink.href = CONFIG.googleMapsPlaceUrl;

  const contactPhone = document.getElementById("contactPhone");
  if(contactPhone) contactPhone.href = `tel:${CONFIG.contactPhone.replace(/\s+/g,'')}`;

  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
