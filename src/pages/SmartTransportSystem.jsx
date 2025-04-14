import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

import { useState } from "react";
// import { MapPin, Bus, Ambulance, Thermometer, QrCode } from "lucide-react";
import { MapPin, Bus, Thermometer, QrCode, Siren } from "lucide-react";


export default function SmartTransportSystem() {
  const [busStatus, setBusStatus] = useState("");
  const [ambulanceRequested, setAmbulanceRequested] = useState(false);
  const [location, setLocation] = useState("");
  const [availableSeats] = useState(14);
  const [temperature] = useState(28);

  const handleBusCheck = () => {
    setBusStatus("GOLCHAKKAR");
  };

  const handleAmbulanceRequest = () => {
    if (location.trim() !== "") {
      setAmbulanceRequested(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Smart Transport System - NIT Jamshedpur</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Bus Tracker */}
        <Card className="shadow-xl rounded-2xl p-4">
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <Bus size={36} className="text-blue-600" />
              <h2 className="text-xl font-semibold">College Bus Tracker</h2>
            </div>
            <p className="mb-2">Seating Capacity: {availableSeats} seats available</p>
            <p className="mb-2 flex items-center gap-2"><Thermometer size={20}/> Temperature: {temperature}°C</p>
            <Button onClick={handleBusCheck}>Check Bus Status</Button>
            {busStatus && <p className="mt-3 text-green-700 blink">{busStatus}</p>}
          </CardContent>
        </Card>

        {/* Ambulance Request */}
        <Card className="shadow-xl rounded-2xl p-4">
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
      
              <Siren size={36} className="text-red-500" />

              <h2 className="text-xl font-semibold">Emergency Ambulance</h2>
            </div>
            <input
              type="text"
              placeholder="Enter location (e.g., Hostel D)"
              className="w-full p-2 border border-gray-300 rounded mb-2"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Button onClick={handleAmbulanceRequest} variant="destructive">Request Ambulance</Button>
            {ambulanceRequested && (
              <p className="mt-3 text-red-600 font-medium">Ambulance sent to {location}. Stay calm!</p>
            )}
          </CardContent>
        </Card>

        {/* Trip Schedule */}
        <Card className="shadow-xl rounded-2xl p-4 col-span-full">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Trip Schedule</h2>
            <ul className="list-disc pl-4 space-y-2 text-gray-700">
            <li>Hostel I - 8:00 AM - Chandil Dam</li>
              <li>Hostel D - 8:15 AM - Ghamharia</li>
              <li>Hostel J - 8:30 AM - Bistupur</li>
              <li>Hostel K - 8:45 AM - Sakchi</li>
            </ul>
          </CardContent>
        </Card>

        {/* QR Code Simulation */}
        <Card className="shadow-xl rounded-2xl p-4 col-span-full">
          <CardContent className="flex flex-col items-center">
            <QrCode size={48} className="text-blue-700 mb-2" />
            <p className="text-center text-sm text-gray-700">Scan QR Code at bus entry point to validate your ID</p>
            <div className="mt-2 w-32 h-32 bg-gray-300 flex items-center justify-center rounded">
              <span className="text-sm text-gray-600"><img src="/public/qr.jpg " alt="QR Code" /></span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-600">
        <MapPin className="inline mr-1" size={16} /> Developed by AMIT CHANCHAL (CSE Students), NIT Jamshedpur
      </footer>
    </div>
  );
}
