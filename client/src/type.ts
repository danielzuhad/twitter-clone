export interface UserType {
  id: string;
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  picturePath?: string;
  friends?: string[];
  post: PostType[];
}

export interface PostType {
  id: string;
  userId: string;
  description?: string;
  picturePath?: string;
  likes?: unknown;
  comments?: string[];
}
