

import { NavigationMenuDemo } from '@/components/MegaMenu';
import Navbar from '@/components/Nav';
import Navbar2 from '@/components/Nav2';
import Navbar3 from '@/components/Nav3';
import Navbar4 from '@/components/Nav4';
import Navbar5 from '@/components/Navbar';
import CreditProvider from '@/components/shared/context/CreditProvider';
import ImageProvider from '@/components/shared/context/ImageProvider';
import { Footer } from '@/components/shared/Footer'
import { NavigationBar } from '@/components/shared/NavigationBar'
import { Toaster } from '@/components/ui/toaster';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const Layout = async ({ children, model }: Readonly<{ children: React.ReactNode, model: React.ReactNode }>) => {

    const authUser = auth();
    let user;
    if (authUser.userId) {
        user = await getUserById(authUser.userId);

    }

    return (
        <>
            <ImageProvider>
                <CreditProvider>
                    <NavigationBar user={user}/>
                    <main className="">

                        {children}
                        {model}

                    </main>
                    <Toaster />
                    <Footer />
                </CreditProvider>
            </ImageProvider>
        </>
    )
}

export default Layout