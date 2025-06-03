import { useState } from 'react';
import { spotifyAPI } from './api/spotifyAPI';

const Dashboard = () => {
  const selectTypes = [
    'album',
    'artist',
    'playlist',
    'track',
    'show',
    'episode',
    'audiobook',
  ];
  const [search, setSearch] = useState({
    song: '',
    types: '',
  });

  const [deviceId, setDeviceId] = useState();

  const [results, setResults] = useState([]);

  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (result) => {
    const isAlreadyFav = favorites.some((fav) => fav.id === result.id);
    if (isAlreadyFav) {
      console.log('ya esta en favs');
      setFavorites((prev) => prev.filter((el) => el.id !== result.id));
    } else {
      setFavorites((prev) => [...prev, result]);
    }
  };

  const saveFavs = async (favs) => {
    await createFavs(favorites);
  }

  const createFavs = async() => {
    const userId = 1;
    const url = `htpp://localhost:3000/api/users/${userId}/favorites`;

    const data = {
      items: favorites,
    };

    const result = await spotifyAPI(url, 'POST', JSON.stringify(data), null);
    console.log(result);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    const newFom = {
      ...search,
      [name]: value,
    };
    console.log(newFom);
    setSearch(newFom);
  };

  const handleSearch = async () => {
    const params = new URLSearchParams();

    params.append('q', encodeURIComponent(`remaster track:${search.song}`));
    params.append('type', search.types);

    const queryString = params.toString();
    const url = 'https://api.spotify.com/v1/search';

    const updateUrl = `${url}?${queryString}`;
    const token = localStorage.getItem('access_token');

    const response = await spotifyAPI(updateUrl, 'GET', null, token);

    setResults(response.tracks.items);
  };

  const getDeviceId = async () => {
    const token = localStorage.getItem('access_token');
    console.log(token)
    const url = 'https://api.spotify.com/v1/me/player/devices';
    const response = await spotifyAPI(url, 'GET', null, token);

    console.log(response);
    setDeviceId(response.devices[0].id);
  };

  const handlePlay = async (song) => {
    const token = localStorage.getItem('access_token');
    const data = {
      uris: [song],
    };
    const url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`;
    const play = await spotifyAPI(url, 'PUT', JSON.stringify(data), token);
    console.log(play);
  };

  return (
    <>
      <div>Dashboard</div>
      <button onClick={getDeviceId}>GET DEVICE ID</button>
      <button onClick={saveFavs}>SAVE FAVS</button>

      
      <p>Search</p>
      <input
        name="song"
        type="text"
        value={search.song}
        onChange={handleChange}
      />
      <p>Select Types:</p>
      <select name="types" value={search.types} onChange={handleChange}>
        {selectTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <button onClick={handleSearch}>Search</button>

      {results.map((result, idx) => (
        <div key={idx}>
          <div>
            <img src={result.album.images[0].url} width={150} />
          </div>
          {/* <div>
                <p>{result.artist[0].name}</p>
            </div> */}
          <div>
            <button onClick={() => handlePlay(result.uri)}>Play </button>
            <button onClick={() => handleAddFavorite(result)}>Add Favorite </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Dashboard;
