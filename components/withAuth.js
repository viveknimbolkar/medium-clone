import { useRouter } from "next/router";
import { useEffect } from "react";


export default function withAuth(Component) {
    return function provider(props) {
        const router = useRouter();
        useEffect(() => {
            console.log(localStorage.getItem("token"));
            if (localStorage.getItem("token") === null)
                router.push("/")
        }, [])
        return <Component {...props} />;
    };

}