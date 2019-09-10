async function operateOnWikipedia() {
  const response = await fetch('de.wikipedia.org//wiki/Spezial', {
    method: 'GET'
  });
  if (!response.ok) throw new Error('Request Error');

  // Parse response as json, fails when format is invalid
  const data = await response.json();
  console.log(data);

  // Send response data back to server
  await fetch('de.wikipedia.org//wiki/Spezial', {
    method: 'POST',
    body: JSON.stringify({ data: data })
  });
}
