// import { authOptions} from "@/app/api/uthOptions/route"
import { authOptions} from '@/utils/uthOptions/route'
// import {isAdmin} from "@/app/api/isAdmin/route"
import {isAdmin} from '@/utils/isAdmin/route'
import {Order} from "../../models/Order"
import mongoose from "mongoose";
import {getServerSession} from "next-auth";

export async function GET(req) {
    mongoose.connect(process.env.MONGODB_URL);

    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email;
    const admin = await isAdmin();
    // let isAdmin = false;

    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    if (_id) {
        return Response.json( await Order.findById(_id) );
    }


    if (isAdmin) {
        return Response.json( await Order.find() );
    }

    if (userEmail) {
        return Response.json( await Order.find({userEmail}) );
    }

}