import Header from "./Header"

const Layout = (props) => (
    <div>
        <Header />
        <div className="content">
            {props.children}
        </div>

        <style jsx>{`
        .content{
            padding:20px;
        }
        `}
        </style>
        <style jsx global>{`
        *{
            box-sizing: border-box;
            margin:0;
            padding:0;
        }
        `}
        </style>
    </div>
);


export default Layout;