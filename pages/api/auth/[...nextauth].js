import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23ligGatRQZTrN1bk1",
      clientSecret: "8fa76081636e4b693da20a2b6d6a848aebc0c46d",
    }),
  ],
};

export default NextAuth(authOptions);
