import axios from "axios";
import "dotenv/config";

const jsonClient = axios.create({
  baseURL: "https://www.omdbapi.com/",
});
jsonClient.interceptors.request.use((request) => {
  console.log(`Requesting: ${request.method} ${request.url}`);
  // if(!title.title) return;
  return request;
});

jsonClient.interceptors.response.use(
  (response) => {
    console.log("View movie details!");
    return response;
  },
  (error) => {
    console.error("Could not fetch movie.");
    return Promise.reject(error);
  },
);

export const searchMovies = async (req, res) => {
  try {
    if (!req.query.title) {
      return res.status(400).json({
        error: "Title query parameter is required!",
      });
    }
    const response = await jsonClient.get(
      `?s=${req.query.title}&apikey=${process.env.OMDB_API_KEY}`,
    );

    console.log(response.data);

    const transformedData = response.data.Search.map((movie) => ({
      Title: movie.Title,
      Year: movie.Year,
      Type: movie.Type,
    }));

    // console.log(transformedData);
    res.json(transformedData);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
      res
        .status(error.response.status)
        .json({ message: "Error fetching data from external API." });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Network Error:", error.message);
      res.status(500).json({ message: "A network error occurred." });
    }
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(400).json({
        error: "Valid Movie id is required!",
      });
    }
    const response = await jsonClient.get(
      `?i=${req.params.id}&apikey=${process.env.OMDB_API_KEY}`,
    );

    // console.log(response.data)

    const transformedData = {
      Title: response.data.Title,
      Year: response.data.Year,
      Genre: response.data.Genre,
      Director: response.data.Director,
      Actors: response.data.Actors,
    };

    // console.log(transformedData);
    res.json(transformedData);
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.status, error.response.data);
      res
        .status(error.response.status)
        .json({ message: "Error fetching data from external API." });
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Network Error:", error.message);
      res.status(500).json({ message: "A network error occurred." });
    }
  }
};
