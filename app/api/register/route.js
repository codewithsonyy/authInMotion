import { connectToMongo } from "@/db/dbConnect";
import User from "@/db/models/User"

export async function POST(request) {
    try{
        await connectToMongo()
        const { name, email, password } = await request.json()
        const user = new User({ name, email, password })
        await user.save()

        return new Response(JSON.stringify(user), {status: 201})
    }catch(err){
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}