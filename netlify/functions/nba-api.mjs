export default async (req) => {
  if (req.method !== "GET") {
    return new Response("Method not allowed", {
      status: 405,
    });
  }

  const apiKey = process.env.NBA_API_KEY;

  if (!apiKey) {
    return new Response("API key not configured", {
      status: 500,
    });
  }

  const path = new URL(req.url).searchParams.get("path");

  try {
    const response = await fetch(`https://api.balldontlie.io/v1/${path}`, {
      headers: {
        Authorization: apiKey,
      },
    });

    if (!response.ok) {
      return new Response("NBA API request failed", {
        status: response.status,
      });
    }

    const data = await response.json();

    return Response.json(data);
  } catch {
    return new Response("Server error", {
      status: 500,
    });
  }
};
