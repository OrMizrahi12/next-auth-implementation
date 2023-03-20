import NextAuth from "next-auth";
import axios from "axios";
import https from 'https'
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, WP_LOFIN_URL_AUTH } from "@/utils/enpoints/endponts";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { extractUserData } from "@/logic/token/TokenDataExtraction";

const custom = {
    cus1: "123",
    cus2: "124",
    cus3: "125"
}

export default NextAuth({

    providers: [

        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET
        }),
        CredentialsProvider({

            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    const response = await axios.post(
                        WP_LOFIN_URL_AUTH,
                        { email: credentials.email, password: credentials.password, authkey: 'abc123' },
                        { headers: { "Content-Type": "application/json" } }
                    );
                    const data = extractUserData(response.data.data.jwt);
                    return {
                        name: data.name,
                        email: data.email,
                        id: data.id
                    };
                }
                catch (error) {
                    throw new Error("Invalid username or password");
                }
            },
        }),

    ],
    callbacks: {
        session: async (session, user) => {

            // in this example, I can pass to the session more custom ditails..
            return {...session, ...user, ...custom};
        }
    }
});
