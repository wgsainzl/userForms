export const spotifyAPI = async (url, method, body, token) => {
    console.log(body);
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: body ?? null,
    });
  
    if (!response.ok) {
      return console.error(response);
    } else {
      return response.json();
    }
  };
  