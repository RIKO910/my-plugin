import React from 'react';
import Header from "@/app/Component/Shared/Header";

const HomeLayout = ({
                        children,
                    }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            {/*<Header/>*/}
            {children}
        </div>
    );
};

export default HomeLayout;