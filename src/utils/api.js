
const URL_TOKEN='https://accounts.spotify.com/api/token'
const CLIENT_ID='c3e0933c7e18416881f5abe252c21c2a';
const CLIENT_SECRET='ffae8408ff6246a58ec743ffdc01cbf3';
const URL_SEARCH_TRACKS='https://api.spotify.com/v1/search';
const URL_GET_ARTIST_INFO='https://api.spotify.com/v1/artists/';

const reduceTracks = (tracks) => {
    try {
        let lightItems = [];
        tracks.forEach((value) => {
            const { id, album, artists, name, duration_ms, popularity } = value;
            const lightTrack = {
                id,
                name,
                artists,
                duration_ms,
                popularity,
                album: {
                    id: album.id,
                    name: album.name,
                    external_urls: album.external_urls,
                    image: album.images[1].url
                }
            };
            lightItems.push(lightTrack)
        });

        return {
            items: lightItems
        };

    }
    catch (error) {
        return error;
    }
};


export const getToken = async () => {
    const authOptions = {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            grant_type: 'client_credentials'
        })
    };

    try{
        const response = await fetch(URL_TOKEN, authOptions);
        return await response.json();
    }
    catch (err)
    {
        return err
    }
};


const validateToken = (token) => {
    if(!token){
        return false;
    }
    const { access_token, token_type } = token;
    return (access_token && token_type);
}


export const getTracks = async (search_params, token) => {

    if (!validateToken(token)) {
        const data = await getToken();
        const { access_token } = data;
        token = access_token;
    }


    const params = {
        q: search_params,
        type: 'track',
        limit: 50
    };

    try {
        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const queryString = `${URL_SEARCH_TRACKS}?q=${params['q']}&type=${params['type']}&limit=${params['limit']} `;
        const response = await fetch(queryString, options);
        const data = await response.json();
        const { error, tracks } = data;

        if (!error && tracks) {
            return {
                tracks: reduceTracks(tracks.items),
                token
            };
        } else {
            return data;
        }
    } catch (error) {
        return {
            error
        };
    }
};

export const getArtists = async (search_params, token) => {

    if (!validateToken(token)) {
        const data = await getToken();
        const { access_token } = data;
        token = access_token;
    }


    const params = {
        q: search_params,
        type: 'artist',
        limit: 50
    };

    try {
        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        // Query Params
        const queryString = `${URL_SEARCH_TRACKS}?q=${params['q']}&type=${params['type']}`;

        const response = await fetch(queryString, options);
        const data = await response.json();
        console.log(data)

    } catch (error) {
        return {
            error
        };
    }
};


export const getArtist = async (artist_id, token) => {
    try {
        let artist = {};

        const artistInfo = await getArtistInfo(artist_id, token);
        artist["artist_info"] = {
            "id": artistInfo.id,
            "followers": artistInfo.followers.total,
            "genres": artistInfo.genres,
            "images": artistInfo.images[0].url,
            "name": artistInfo.name,
            "popularity": artistInfo.popularity
        };

        const topTracksData = await getArtistTopTracks(artist_id, token);
        artist["top_tracks"] = reduceTracks(topTracksData.tracks).items.slice(0, 5);

        artist["albums"] = await getArtistAlbums(artist_id, token);

        return {
            artist: artist
        };
    } catch (e) {
        console.log(e);
    }
};

export const getArtistTopTracks = async (artist_id, token) => {
    try{
        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const fetchURL = `${URL_GET_ARTIST_INFO}${artist_id}/top-tracks`
        const response = await fetch(fetchURL, options);
        return await response.json();
    }
    catch (e) {
        return e
    }

};

export const getArtistInfo = async (artist_id, token) => {
    try{
        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const fetchURL = `${URL_GET_ARTIST_INFO}${artist_id}`
        const response = await fetch(fetchURL, options);
        return await response.json();

    }
    catch (e) {
       return e
    }

};

export const getArtistAlbums = async (artist_id, token) => {
    try{
        const options = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const fetchURL = `${URL_GET_ARTIST_INFO}${artist_id}/albums`
        const response = await fetch(fetchURL, options);
        return await response.json()
    }
    catch (e) {
        return e
    }

};

