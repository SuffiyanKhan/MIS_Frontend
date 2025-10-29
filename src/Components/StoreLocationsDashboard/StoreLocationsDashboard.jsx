// import React from "react";
// import {
//     Card,
//     CardContent,
//     Typography,
//     Box,
//     IconButton,
//     Divider,
//     Tooltip,
// } from "@mui/material";
// import MapIcon from "@mui/icons-material/Map";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import RoomIcon from "@mui/icons-material/Room";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// const StoreLocationsDashboard = () => {
//     // Dummy store coordinates (replace with real data later)
//     const stores = [
//         { id: 1, name: "New York Store", lat: 40.7128, lng: -74.006 },
//         { id: 2, name: "Los Angeles Store", lat: 34.0522, lng: -118.2437 },
//         { id: 3, name: "Chicago Store", lat: 41.8781, lng: -87.6298 },
//         { id: 4, name: "Houston Store", lat: 29.7604, lng: -95.3698 },
//         { id: 5, name: "Miami Store", lat: 25.7617, lng: -80.1918 },
//     ];

//     const center = { lat: 39.8283, lng: -98.5795 }; // USA center

//     const { isLoaded } = useJsApiLoader({
//         id: "google-map-script",
//         googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // 👈 Replace with your real API key
//     });

//     return (
//         <Card className="shadow-sm rounded-4 border-0 h-100">
//             <CardContent>
//                 {/* Header */}
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                     <div className="d-flex align-items-center">
//                         <MapIcon color="success" sx={{ mr: 1 }} />
//                         <div>
//                             <Typography variant="h6" sx={{ fontWeight: 600 }}>
//                                 Store Locations
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Map or visual showing store locations & markets.
//                             </Typography>
//                         </div>
//                     </div>
//                     <IconButton size="small">
//                         <MoreVertIcon />
//                     </IconButton>
//                 </div>

//                 <Divider sx={{ mb: 2 }} />

//                 {/* Google Map */}
//                 <Box
//                     sx={{
//                         height: 350,
//                         width: "100%",
//                         borderRadius: 3,
//                         overflow: "hidden",
//                         position: "relative",
//                     }}
//                 >
//                     {isLoaded ? (
//                         <GoogleMap
//                             mapContainerStyle={{ width: "100%", height: "100%" }}
//                             center={center}
//                             zoom={4}
//                             options={{
//                                 mapTypeControl: false,
//                                 streetViewControl: false,
//                                 fullscreenControl: false,
//                             }}
//                         >
//                             {stores.map((store) => (
//                                 <Tooltip key={store.id} title={store.name} placement="top">
//                                     <Marker
//                                         position={{ lat: store.lat, lng: store.lng }}
//                                         icon={{
//                                             path:
//                                                 "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
//                                             fillColor: "#16a34a",
//                                             fillOpacity: 1,
//                                             strokeColor: "#0f5132",
//                                             strokeWeight: 1,
//                                             scale: 1.5,
//                                             anchor: new window.google.maps.Point(12, 24),
//                                         }}
//                                     />
//                                 </Tooltip>
//                             ))}
//                         </GoogleMap>
//                     ) : (
//                         <Box
//                             className="d-flex justify-content-center align-items-center"
//                             sx={{
//                                 height: "100%",
//                                 backgroundColor: "#f8fafc",
//                                 borderRadius: 2,
//                             }}
//                         >
//                             <Typography variant="body2" color="text.secondary">
//                                 Loading map...
//                             </Typography>
//                         </Box>
//                     )}
//                 </Box>

//                 {/* Footer / Store Count */}
//                 <Box mt={3} className="d-flex align-items-center justify-content-between">
//                     <Typography variant="body2" color="text.secondary">
//                         Total Stores: <b>{stores.length}</b>
//                     </Typography>
//                     <Box display="flex" alignItems="center" gap={1}>
//                         <RoomIcon color="success" fontSize="small" />
//                         <Typography variant="body2" color="text.secondary">
//                             Active Markets
//                         </Typography>
//                     </Box>
//                 </Box>
//             </CardContent>
//         </Card>
//     );
// };

// export default StoreLocationsDashboard;

import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    IconButton,
    Divider,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RoomIcon from "@mui/icons-material/Room";
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

const StoreLocationsDashboard = () => {
    const [activeMarker, setActiveMarker] = useState(null);

    const stores = [
        { id: 1, name: "New York Store", lat: 40.7128, lng: -74.006 },
        { id: 2, name: "Los Angeles Store", lat: 34.0522, lng: -118.2437 },
        { id: 3, name: "Chicago Store", lat: 41.8781, lng: -87.6298 },
        { id: 4, name: "Houston Store", lat: 29.7604, lng: -95.3698 },
        { id: 5, name: "Miami Store", lat: 25.7617, lng: -80.1918 },
    ];

    const center = { lat: 39.8283, lng: -98.5795 };

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your real key
    });

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) return;
        setActiveMarker(marker);
    };

    return (
        <Card className="shadow-sm rounded-4 border-0 h-100">
            <CardContent>
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <MapIcon color="success" sx={{ mr: 1 }} />
                        <div>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Store Locations
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Map showing store locations & coverage areas.
                            </Typography>
                        </div>
                    </div>
                    <IconButton size="small">
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <Divider sx={{ mb: 2 }} />

                {/* Map */}
                <Box
                    sx={{
                        height: 350,
                        width: "100%",
                        borderRadius: 3,
                        overflow: "hidden",
                    }}
                >
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: "100%", height: "100%" }}
                            center={center}
                            zoom={4}
                            options={{
                                mapTypeControl: false,
                                streetViewControl: false,
                                fullscreenControl: false,
                            }}
                            onClick={() => setActiveMarker(null)}
                        >
                            {stores.map((store) => (
                                <Marker
                                    key={store.id}
                                    position={{ lat: store.lat, lng: store.lng }}
                                    onClick={() => handleActiveMarker(store.id)}
                                    icon={{
                                        path:
                                            "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
                                        fillColor: "#16a34a",
                                        fillOpacity: 1,
                                        strokeColor: "#0f5132",
                                        strokeWeight: 1,
                                        scale: 1.5,
                                        anchor: new window.google.maps.Point(12, 24),
                                    }}
                                >
                                    {activeMarker === store.id ? (
                                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                                                    {store.name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    Lat: {store.lat.toFixed(2)}, Lng: {store.lng.toFixed(2)}
                                                </Typography>
                                            </Box>
                                        </InfoWindow>
                                    ) : null}
                                </Marker>
                            ))}
                        </GoogleMap>
                    ) : (
                        <Box
                            className="d-flex justify-content-center align-items-center"
                            sx={{
                                height: "100%",
                                backgroundColor: "#f8fafc",
                                borderRadius: 2,
                            }}
                        >
                            <Typography variant="body2" color="text.secondary">
                                Loading map...
                            </Typography>
                        </Box>
                    )}
                </Box>

                {/* Footer */}
                <Box mt={3} className="d-flex align-items-center justify-content-between">
                    <Typography variant="body2" color="text.secondary">
                        Total Stores: <b>{stores.length}</b>
                    </Typography>
                    <Box display="flex" alignItems="center" gap={1}>
                        <RoomIcon color="success" fontSize="small" />
                        <Typography variant="body2" color="text.secondary">
                            Active Markets
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default StoreLocationsDashboard;
