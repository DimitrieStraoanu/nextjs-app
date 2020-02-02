import Navbar from "./Navbar";

const Header = () => (
    <div>
        <p>My NextJS App</p>
        <Navbar />

        <style jsx>{`

        div {
            display: flex;
            align-items: center;
            background: black;
            color: white;
            padding:20px;
        }      
        
        `}
        </style>
    </div>
);

export default Header;