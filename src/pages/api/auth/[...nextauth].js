import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { sql } from '@vercel/postgres';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ profile }) {
      // Check if the user's email exists in the database
      const { rows } = await sql`
        SELECT * FROM users WHERE email = ${profile.email};
      `;

      // Allow sign-in if user exists
      return rows.length > 0; // Return true or false based on existence
    },
    async jwt({ token, user }) {
      if (user) {
        // Fetch the user's role and ID from the database
        const { rows } = await sql`
          SELECT role, id FROM users WHERE email = ${user.email};
        `;

        // Set role and ID in the token if found
        if (rows.length > 0) {
          token.role = rows[0].role;
          token.id = rows[0].id; // User ID
        } else {
          token.role = 'guest'; // Default role if not found
          token.id = rows[0].id; // User ID
        }
      }
      return token; // Return the updated token
    },
    async session({ session, token }) {
      // Attach the token information to the session
      session.user.id = token.id; // User ID from the token
      session.user.role = token.role; // User role from the token
      session.user.email = token.email; // User email from the token, if needed

      return session; // Return the session with updated information
    },
  },
  pages: {
    signIn: '/', // Custom sign-in page if needed
  },
});
