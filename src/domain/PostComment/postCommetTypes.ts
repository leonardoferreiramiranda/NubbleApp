export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  createAtRelative: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 108,
  message: string; // "Cervus aperio clamo civis cibo pectus conqueror adfectus vociferor.",
  user_id: number; // 7,
  post_id: number; // 1,
  created_at: string; // "2023-09-30T10:55:54.000-03:00",
  updated_at: string; // "2023-09-30T15:20:51.825-03:00",
  user: {
    id: number; // 7,
    first_name: string; // "Mateus",
    last_name: string; // "de Souza",
    username: string; // "mateussouza",
    email: string; // "msouza@coffstack.com",
    profile_url: string; // "https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png",
    is_online: boolean; // false,
    full_name: string; // "Mateus de Souza"
  };
}
