const Footer = () => {
    let year = new Date().getFullYear()

    return (
        <footer>
            <p>Copyright {year} Mix It </p>
        </footer>
    )
}

export default Footer