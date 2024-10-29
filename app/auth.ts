import NextAuth from "next-auth"
import TikTok from "next-auth/providers/tiktok"
import Instagram from "next-auth/providers/instagram"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [TikTok, Instagram],
})