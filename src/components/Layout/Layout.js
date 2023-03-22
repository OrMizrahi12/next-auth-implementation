const { default: Navbar } = require("./Navbar")

const Layout = ({ children, headerFooterData, categories }) => {

    return (
        <>
            <Navbar headerData={headerFooterData.header} categories={categories} />
            
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