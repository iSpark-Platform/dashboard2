import { Wrapper } from "@/layout";
import ContactMeMain from "@/components/contact-me";

export const metadata = {
  title: 'Contact Me'
}

const ContactMePage = () => {
  return (
    <Wrapper>
      <ContactMeMain />
    </Wrapper>
  )
}

export default ContactMePage;