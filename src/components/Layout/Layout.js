const { default: Navbar } = require("./Navbar")

const Layout = ({ children, headerFooterData }) => {

    return (
        <>
            <Navbar headerData={headerFooterData.header} />
            
            <main>
            <br />
            <br />
            <br />
            <br />
            <br />
            
                {children}
            </main>
        </>
    )
}
export default Layout