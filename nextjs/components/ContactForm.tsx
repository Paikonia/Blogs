import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";



const ContactForm = () => {
  
  return (
    <div>
      <form name="Contact Form" method="POST">
        <Label htmlFor="Name">Name</Label>
        <Input type="text" name="Name" className="my-4" placeholder="John Doe" />
        <Label htmlFor="Email">Email</Label>
        <Input type="email" name="Email" className="my-4" placeholder="hello@example.com" />
        <Label htmlFor="Message">Message</Label>
        <Textarea name="Message" placeholder="Your message here..." />
        <Button disabled type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
