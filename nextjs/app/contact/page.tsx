import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";

const ContactUs = () => {
  return (
    <Container narrow={false}>
      <section className="contact-hero__section">
        <div className="contact-hero__text-section">
          <h1>Contact Us</h1>
          <p>This for will allow you to reach my inbox that</p>
          <div>
            <p>
              <em>
                <a href="tel:+256740388432">(256) 740 388 432</a>
              </em>{" "}
              •{" "}
              <em>
                <a href="patrickaiko@aikosnotes.info">
                  patrickaiko@aikosnotes.info
                </a>
              </em>
            </p>
          </div>
        </div>
        <div className="col-2__container">
          <ContactForm />
        </div>
      </section>
    </Container>
  );
};

export default ContactUs;
