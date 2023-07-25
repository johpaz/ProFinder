import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import { Box, Heading } from '@chakra-ui/react';
import icon from './icon.png';
import iconShadow from './icon.png';
const MapSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3006/profesional/')
      .then((response) => {
        setData(response.data);
        console.log(response.data); // Imprime los datos en la consola
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);
  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <Box p={4} width="100%">
      <Box textAlign="center" my={4}>
        <Heading as="h1">Tu aplicación con mapas</Heading>
      </Box>
      <Box maxWidth="500px" mx="auto">
        {/* El componente MapContainer debe tener un tamaño definido para que el mapa sea visible */}
        <MapContainer>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* Aquí puedes utilizar la data obtenida y mapearla para mostrar los marcadores */}
          {data.map((item) => (
            <Marker key={item.id} position={[item.geolocation[0], item.geolocation[1]]}>
              <Popup>{item.name}</Popup>
            </Marker>
  ))}
</MapContainer>

      </Box>
    </Box>
  );
};

export default MapSection;
