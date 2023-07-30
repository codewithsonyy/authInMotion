import NextAuth from "next-auth";
import User from '@/db/models/User'
import {  connectToMongo } from "@/db/dbConnect";
import { generateAccessToken } from "@/utils/token";

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions= {
  session: {
    jwt: true,
    accessToken: true
  },
  secret: process.env.SECRET_KEY,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ,
      clientSecret: process.env.GITHUB_SECRET ,
    }),
    CredentialsProvider({
      name: "Sign in with Email",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },
      authorize: async (credentials) => {
        connectToMongo()
        const user = await User.findOne({email: credentials?.email}).select('+password')
        if(!user) { throw new Error('Invalid user')}

        const pwValid = await user.comparePassword(credentials.password)
        if(!pwValid){ throw new Error("Wrong password!") }

        return user;
      }
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
        token.accessToken = generateAccessToken(user)
      }
      return token;
    },
    async session({ session, token }) {
      if(token){
        session.user = token.user
        session.accessToken = token.accessToken
      }
      return session
    },
  },
  pages: {
    signIn: '/entry',
  },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
