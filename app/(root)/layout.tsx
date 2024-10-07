import ImageProvider from '@/components/shared/context/ImageProvider';
import { Footer } from '@/components/shared/Footer'
import { NavigationBar } from '@/components/shared/NavigationBar'
import { Toaster } from '@/components/ui/toaster';
import { getUserByIdAppwrite } from '@/lib/appwrite/actions/user.actions';
import { deleteUserMongoDB, getUserByIdMongoDB } from '@/lib/mongodb/actions/user.actions';
import { auth } from '@clerk/nextjs/server';

const Layout = async ({ children, model }: Readonly<{ children: React.ReactNode, model: React.ReactNode }>) => {

    const authUser = auth();
    let user;
    if (authUser.userId) {
        try {
            user = await getUserByIdAppwrite(authUser.userId);
            const isUserExistInMongoDB=await getUserByIdMongoDB(authUser.userId)
            if(isUserExistInMongoDB && isUserExistInMongoDB._id){
                await deleteUserMongoDB(authUser.userId)
            }
        } catch (error) {
            user = await getUserByIdMongoDB(authUser.userId);
        }


    }

    return (
        <>
            <ImageProvider>
                <NavigationBar user={user} />
                <main className="">

                    {children}
                    {model}

                </main>
                <Toaster />
                <Footer />
            </ImageProvider>
        </>
    )
}

export default Layout