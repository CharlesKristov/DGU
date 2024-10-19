import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { IconMapPinFilled } from '@tabler/icons-react';
import { renderToString } from 'react-dom/server';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';


interface Location {
    name: string;
    position: [number, number];
    color?: string;
}

interface MapComponentProps {
    locations: Location[];
    zoom: number;
    center?: [number, number];
    selectedLocation: Location | null;
}

// Default center coordinates for Indonesia
const DEFAULT_CENTER: [number, number] = [-2.3813501, 107.2206331];
const DEFAULT_ZOOM = 5;

// Create a separate component to handle map updates
const MapUpdater: React.FC<{ selectedLocation: Location | null; defaultCenter: [number, number] }> = ({ 
    selectedLocation, 
    defaultCenter 
}) => {
    const map = useMap();

    useEffect(() => {
        if (selectedLocation) {
            map.setView(selectedLocation.position, 10, {
                animate: true,
                duration: 1
            });
        } else {
            // When no location is selected, return to default view
            map.setView(defaultCenter, DEFAULT_ZOOM, {
                animate: true,
                duration: 1
            });
        }
    }, [selectedLocation, defaultCenter, map]);

    return null;
};

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});


const createCustomIcon = (color = 'red') => {
    const iconHtml = renderToString(<IconMapPinFilled fill={color} size={24} />);

    return L.divIcon({
        html: iconHtml,
        className: "custom-icon",
        iconSize: [24, 24],
        iconAnchor: [12, 24],
    });
};

const ZoomControl = () => {
    const map = useMap();
    
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!e.ctrlKey) return;
            
            e.preventDefault();
            const delta = e.deltaY;
            const zoom = map.getZoom();
            
            if (delta > 0) {
                map.setZoom(zoom - 1);
            } else {
                map.setZoom(zoom + 1);
            }
        };

        const mapContainer = map.getContainer();
        mapContainer.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            mapContainer.removeEventListener('wheel', handleWheel);
        };
    }, [map]);

    return null;
};

const MapComponent: React.FC<MapComponentProps> = ({ locations = [], selectedLocation }) => {
    // Calculate default center point from all markers
    const calculateMapCenter = (): [number, number] => {
        if (locations.length === 0) {
            return DEFAULT_CENTER;
        }

        const sumLat = locations.reduce((sum, loc) => sum + loc.position[0], 0);
        const sumLng = locations.reduce((sum, loc) => sum + loc.position[1], 0);
        return [sumLat / locations.length, sumLng / locations.length];
    };

    const defaultCenter = calculateMapCenter();
    const initialCenter = selectedLocation ? selectedLocation.position : defaultCenter;
    const initialZoom = selectedLocation ? 10 : DEFAULT_ZOOM;

    return (
        <MapContainer 
            center={initialCenter}
            zoom={initialZoom}
            className="mt-10 w-full h-[500px] md:h-[600px] lg:h-[700px]"
            scrollWheelZoom={false}
        >
            <MapUpdater 
                selectedLocation={selectedLocation}
                defaultCenter={defaultCenter}
            />
            <ZoomControl />
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
                <Marker 
                    key={`${location.name}-${index}`}
                    position={location.position}
                    icon={createCustomIcon(location.color)}
                />
            ))}
        </MapContainer>
    );
};

export default MapComponent;