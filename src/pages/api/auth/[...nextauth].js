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
      // Check if the user's email and name exist in the database
      const { rows } = await sql`
      SELECT * FROM users WHERE email = ${profile.email} AND name = ${profile.name};
      `;


      if (rows.length > 0) {
        // Allow sign-in
        return true;
      } else {
        // Reject sign-in
        
        return false;
      }
    },
    async jwt({ token, user }) {
      // Add role to the JWT token
      if (user) {
        token.id = user.id;
        token.role = user.role; // Make sure the role is added to the token
      }
      return token;
    },
    async session({ session, token }) {
      // Add role to the session
      session.user.id = token.id;
      session.user.role = token.role; // Make sure the role is added to the session
      const userEmail = session.user.email;

      try {
        // Fetch the role from your database using the user's email
        const {rows} = await sql`SELECT role FROM users WHERE email = ${userEmail} ;`;

        // Attach the role to the session object
        if (rows.length > 0) {
          session.user.role = rows[0].role;
        } else {
          session.user.role = 'guest'; // Default role if not found
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        session.user.role = 'guest'; // Handle the case where the query fails
      }

      return session;
    },
  },
  pages: {
    signIn: '/', // Custom sign-in page if needed
  },
});
