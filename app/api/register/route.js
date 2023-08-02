import connectToMongo from "@/db/dbConnect";
import User from "@/db/models/User"
import bcrypt from 'bcryptjs';

export async function POST(request) {
    try{
        await connectToMongo()
        const { username, email, password } = await request.json()
        const isExisting = await User.findOne({ email });

    if (isExisting) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

        const user = new User({username, email, password })
        await user.save()

        return new Response(JSON.stringify(user), {status: 201})
    }catch(err){
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}