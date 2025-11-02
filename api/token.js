export default async function handler(req, res) {
    const { code } = req.query;
    const client_id = "a4c46dd220374fc586a40f8450993f5a";
    const client_secret = "fe25f54705cb4bf1ab0faacc30d61a03";
    const redirect_uri = "https://inteligence-music-gravi.vercel.app/";
  
    const authOptions = {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri
      })
    };
  
    const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
    const data = await response.json();
  
    res.status(200).json(data);
  }
  