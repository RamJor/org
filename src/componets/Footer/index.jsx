
import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/footer.png)"}} >
         <div className="redes">
            <a href="https://www.linkedin.com/in/jorge-ram%C3%ADrez-50b08222a/">
                <img src="/img/linkedin.png" alt="linkedin" />
            </a>

            <a href="https://github.com/RamJor">
                <img src="/img/git.png" alt="github" />
            </a>

            <a href="https://portafolio-jzb1.vercel.app/">
                <img src="/img/portafoio.png" alt="portafolio" />
            </a>
         </div>
         <img src="/img/org.png" alt="org" />
         <strong>Desarrollado por Jorge Ramirez</strong>
    </footer>
}
export default Footer