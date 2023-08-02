import NextAuth from "next-auth";
import User from '@/db/models/User'

import { generateAccessToken } from "@/utils/token";
import bcrypt from 'bcryptjs';

import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
//import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToMongo from "@/db/dbConnect";
export const authOptions= {
  session: {
    jwt: true,
    accessToken: true
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ,
      clientSecret: process.env.GITHUB_SECRET ,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    // }),
    CredentialsProvider({
      name: "Sign in with Email",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },
      authorize: async (credentials) => {
        await connectToMongo()
        const user = await User.findOne({email: credentials?.email}).select('+password')
        if(!user) { throw new Error('Invalid user')}

        // const pwValid = await user.comparePassword(credentials.password)
        const comparePass = await bcrypt.compare(credentials.password,user.password );

        if(!comparePass){ throw new Error("Wrong password!") }

        return user;
      }
    }),
  ],
  pages:{
    signIn:"/login"
  },
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

}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
