// types/next-auth.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

// Extend the built-in session types
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string; // Add role to the session user
      email: string;
      name: string;
    };
  }

  interface User {
    id: string;
    role: string; // Add role to the user
  }
}

// Extend the JWT type
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string; // Add role to the JWT token
  }
}
