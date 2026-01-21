import Image from "next/image";
import Header from "./ui/header";
// import css from './index.module.css'

export const Layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div >
            <Header />

            {children}

            <Image src='/background.png' alt="" width={1920} height={6088} />
        </div>
    )
}