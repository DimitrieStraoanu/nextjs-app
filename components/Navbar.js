import Link from "next/link";

const Navbar = () => (
    <div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/news"><a>News</a></Link>
        <Link href="/about"><a>About</a></Link>

        <style jsx>{`

            div{
                margin-left: auto;
            }

            a{
                margin-left:10px;
                color: white;
                text-decoration: none;
            }

            a:hover{
                color: grey;
            }

        `}
        </style>
    </div>
);

export default Navbar;
