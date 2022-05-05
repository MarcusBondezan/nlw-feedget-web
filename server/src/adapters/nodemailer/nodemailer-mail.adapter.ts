import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5d0669bcb58e45",
    pass: "0f447d54b02375"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Marcus Bondezan <marcus.bondezan@gmail.com>',
      subject,
      html: body,
    });
  }
  
}