interface IMutual {
  username: string;
  name: string;
  link: string;
  profilePicture: string;
}

interface MutualResponse {
  mutuals: IMutual[];
  common: number;
}

export type { IMutual, MutualResponse };
