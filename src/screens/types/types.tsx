export interface IFollowing {
  type: string;
  id: number;
  playlist: string;
  flashcard_front: string;
  flashcard_back: string;
  description: string;
  user: IUser;
}

export interface IUser {
  name: string;
  avatar: string;
}

export interface IForYou {
  type: string;
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: IOption[];
  user: IForYouUser;
}

export interface IOption {
  id: string;
  answer: string;
}

export interface IForYouUser {
  name: string;
  avatar: string;
}
