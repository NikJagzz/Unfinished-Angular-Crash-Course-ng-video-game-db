export interface Game {
  background_image:string;
  name: string;
  release: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platform: Array<ParentPlatform>;
  Publisher: Array<Publisher>;
  Ratings: Array<Rating>;
  screenshots: Array<Screenshots>;
  trailers: Array<Trailer>;
}

export interface APIResponse<T> {
  results:Array<T>;
}

interface Genre {
  name: string;
}

interface ParentPlatform {
    name: string;
  };

interface Publisher {
    name: string;
  };

interface Rating {
  id: number;
  count: number;
  title: string;
  }

  interface Screenshots {
    image: string;
  };

  interface Trailer {
    data: {
      max: string;
    }
  }
