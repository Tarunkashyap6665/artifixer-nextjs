import ImageProvider from '@/components/shared/context/ImageProvider';
import { Footer } from '@/components/shared/Footer'
import { NavigationBar } from '@/components/shared/NavigationBar'
import { Toaster } from '@/components/ui/toaster';
// import { createCookies } from '@/app/actions';
import { createUserAppwrite, getUserByIdAppwrite } from '@/lib/appwrite/actions/user.actions';
import { deleteUserMongoDB, getUserByIdMongoDB } from '@/lib/mongodb/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
// import { cookies } from 'next/headers'




const Layout = async ({ children, model }: Readonly<{ children: React.ReactNode, model: React.ReactNode }>) => {

    const authUser = auth();
    let user;

    if (authUser.userId) {
        try {
            user = await getUserByIdAppwrite(authUser.userId);
            const isUserExistInMongoDB = await getUserByIdMongoDB(authUser.userId)
            if (isUserExistInMongoDB && isUserExistInMongoDB._id) {
                await deleteUserMongoDB(authUser.userId)
            }
        } catch (error) {
            try {
                user = await getUserByIdMongoDB(authUser.userId);
                const newUser = {
                    clerkId: user.clerkId,
                    email: user.email,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    photo: user.photo,
                }
                await createUserAppwrite(authUser.userId, newUser)
            } catch (error) {
                console.warn("User already exists.")
            }
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