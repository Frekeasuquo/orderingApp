import clientPromise from "@/libs/mongoConnet"
import mongoose from "mongoose";
import {User} from "@/app/models/User"
import * as bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import { authOptions} from "@/app/api/uthOptions/route"
import { authOptions} from '@/utils/uthOptions/route'



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}

