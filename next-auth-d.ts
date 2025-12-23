import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user_id?: number;
    username?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user_id?: number;
    username?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

export interface UserType {
  id: string;
  name?: string;
  email?: string;
  accessToken?: string;
  refreshToken?: string;
  user_id?: number;
  username?: string;
}
