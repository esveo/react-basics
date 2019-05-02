export async function getSatellites() {
  const serverResponse = await fetch('http://localhost:3002/satellites');
  return await serverResponse.json();
}

export async function createSatellite(newSatellite) {
  const serverResponse = await fetch('http://localhost:3002/satellites', {
    method: 'POST',
    body: JSON.stringify(newSatellite)
  });
  return await serverResponse.json();
}

export async function updateSatellite(updatedSatellite) {
  const serverResponse = await fetch(
    'http://localhost:3002/satellites/' + updatedSatellite.id,
    {
      method: 'PUT',
      body: JSON.stringify(updatedSatellite)
    }
  );
  return await serverResponse.json();
}

export async function deleteSatellite(updatedSatellite) {
  await fetch('http://localhost:3002/satellites/' + updatedSatellite.id, {
    method: 'DELETE'
  });
}
