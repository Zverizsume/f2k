
import Link from 'next/link';

export default function Footer() {
    return (
            <div className="footer_wrapper container">
                <div className="footer_copyright">
                    <p>Copyright &copy; {new Date().getFullYear()} <a href="/"><span> F2K</span></a>.  <Link href="/cookie_policy"><a><span>Cookie Policy</span></a></Link> - <Link href="/privacy_policy"><a><span>Privacy Policy</span></a></Link></p>
                </div>
            </div>
    )
}