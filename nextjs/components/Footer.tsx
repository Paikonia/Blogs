/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Container from "./Container";
export type FooterSocial = {
  url:string;
  name: string;
  icon:string
}

export type FooterlistType = {
  title:string;
  items: {slug:string, title: string}[]
}

type FooterProps = {
  footerSocials: FooterSocial[];
  footerLists: FooterlistType[];
  copyrightName: string;
};


const Footer:React.FC<FooterProps> = ({
  footerSocials,
  footerLists,
  copyrightName,
  
}: FooterProps) => {
  return (
    <footer>
      <Container narrow={false}>
        <div className="footer-grid__container">
          <div className="footer-brand__container">
            <div>
              <h1 className="logo">Patrick's</h1>
            </div>
            <ul className="footer-socials__list">
              {footerSocials.map((social) => (
                <li key={social.name} className="footer-socials__item">
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-socials__link"
                    title={`Open ${social.name} profile`}
                  >
                    {/* {getIcon(social.icon)} */} {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {footerLists.map((list) => (
            <div key={list.title}>
              <p>
                <strong>{list.title}</strong>
              </p>
              <ul className="footer-link__list">
                {list.items.map((item) => (
                  <li key={item.slug}>
                    <Link href={item.slug}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-copyright__container">
          <p>
            Copyright &copy; {new Date().getFullYear()} {copyrightName}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
