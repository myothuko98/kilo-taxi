const crypto = require('crypto');

// Generate a random JWT secret key
// const generateSecretKey = () => {
//   const secretKey = crypto.randomBytes(32).toString('hex');
//   console.log(`Generated JWT Secret Key: ${secretKey}`);
// };

// generateSecretKey();


// Helper function to calculate the distance between two points using the Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const earthRadius = 6371; // Earth's radius in kilometers

  // Convert latitude and longitude values to radians
  const lat1Rad = toRadians(lat1);
  const lon1Rad = toRadians(lon1);
  const lat2Rad = toRadians(lat2);
  const lon2Rad = toRadians(lon2);

  // Calculate the differences between the latitudes and longitudes
  const latDiff = lat2Rad - lat1Rad;
  const lonDiff = lon2Rad - lon1Rad;

  // Apply the Haversine formula
  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(lonDiff / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;
  console.log(`Distance between the two points is ${distance} km`);
  return distance;
};

// Helper function to convert degrees to radians
const toRadians = (degrees) => {
  return (degrees * Math.PI) / 180;
};

calculateDistance(16.841752, 96.170798, 16.804203155992266, 96.13826768777562)

