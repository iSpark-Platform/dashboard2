import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
    logoLight: '/assets/images/logo/logo-dark.png',
    logoDark: '/assets/images/logo/logo-white.png',
    desc: 'We believe no student should miss out on 21st-century skills due to economic challenges. iSpark makes STEM education accessible and affordable, fostering inclusive growth across India.',
  //  add: '70-80 Upper St Norwich NR2',
    call: '+91 91761 32300',
    email: 'info@isparkskills.ai',
    widgets: [
        {
            col: '3',
            class: 'explore-widget',
            widget_title: 'Online Platform',
            footer_links: [
                { link: 'about-1', title: 'About' },
                { link: 'course-style-3', title: 'Courses' },
                { link: 'internship', title: 'Internships' },
                { link: 'team-1', title: 'Instructor' },
                { link: '#', title: 'Events' },
                // { link: 'event-grid', title: 'Events' },
                { link: '#', title: 'Purchase Guide' }
                // { link: 'purchase-guide', title: 'Purchase Guide' }
            ]
        },
        {
            col: '2',
            class: 'quick-link-widget',
            widget_title: 'Links',
            footer_links: [
                { link: 'contact-us', title: 'Contact Us' },
                { link: 'gallery-grid', title: 'Gallery' },
                { link: 'blog-standard', title: 'News & Articles' },
                { link: 'faq', title: "FAQ's" },
                { link: 'login', title: 'Sign In' },
                { link: 'coming-soon', title: 'Coming Soon' }
            ]
        }
    ]

}

const { logoDark, logoLight, desc, add, call, email, widgets } = footer_contents;

const Footer = ({ style_2, dark_bg,home_4,cls='',logo_white=false }) => {
    return (
        <footer className={`edu-footer ${style_2 ? style_2 : dark_bg ? 'footer-dark bg-image footer-style-3' :cls?'':"footer-lighten bg-image footer-style-1"} ${cls}`}>
            <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="edu-footer-widget">
                                {!logo_white && <div className="logo">
                                    <Link href={'/'}>
                                            {!dark_bg && <>
                                                {!style_2 && <img className="logo-light" src={logoLight} alt="Corporate Logo" />}
                                                <img className="logo-dark" src={logoDark} alt="Corporate Logo" />
                                            </>}
                                    </Link>

                                    {dark_bg && <Link href={'/'}>
                                            <img className="logo-light" src={home_4?'/assets/images/logo/logo-white.png' :'/assets/images/logo/logo-light-2.png'} alt="Corporate Logo" />
                                    </Link>}
                                </div>
                                }

                                {logo_white && 
                                <div className="logo">
                                    <Link href="/">
                                        <img src="/assets/images/logo/logo-white.png" alt="Corporate Logo"/>
                                    </Link>
                                </div>
                                }

                                <p className="description">{desc}</p>
                                <div className="widget-information">
                                    <ul className="information-list">
                                         {/*<li><span>Add:</span>{add}</li>*/} 
                                        <li><span>Call:</span><a href="tel:+91 91761 32300">{call}</a></li>
                                        <li><span>Email:</span><a href="mailto:info@isparkskills.ai" rel="noreferrer" target="_blank">{email}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => <li key={i}><Link href={`/${l.link}`}>{l.title}</Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Contacts</h4>
                                <div className="inner">
                                    <p className="description">Enter your email address to register to our newsletter subscription</p>
                                    <div className="input-group footer-subscription-form">
                                        <input type="email" className="form-control" placeholder="Your email" />
                                        <button className={`edu-btn ${dark_bg && !home_4?'btn-secondary':''} btn-medium`} type="button">Subscribe <i className="icon-4"></i></button>
                                    </div>
                                    <ul className="social-share icon-transparent">
                                        <FooterSocial/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>Copyright {new Date().getFullYear()} <a href="https://isparklearning.com/index" rel="noreferrer" target="_blank">iSpark</a> Designed By <a href="https://isparklearning.com/index" rel="noreferrer" target="_blank">iSpark Learning Solutions</a>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;