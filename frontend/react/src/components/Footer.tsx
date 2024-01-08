import React from "react";
import Container from "./Container";
// import * as Icon from 'lucide-react'
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

// const getIcon = (name:string) => {
//   const i = Icon[name]

//   if(i) return i

//   return <p>No such Icon</p>
// }

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
                <li className="footer-socials__item">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-socials__link"
                    title={`Open ${social.name} profile`}
                  >
                    {/* {getIcon(social.icon)} */} {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {footerLists.map((list) => (
            <div>
              <p>
                <strong>{list.title}</strong>
              </p>
              <ul className="footer-link__list">
                {list.items.map((item) => (
                  <li>
                    <a href={item.slug}>{item.title}</a>
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
