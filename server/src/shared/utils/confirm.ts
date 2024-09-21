import { promises as fs } from "fs";
import path from "path";
import { getTemplatedString } from "./getTemplate";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import config from "../../config";

const mailerSend = new MailerSend({
  apiKey: config.mailersend_api,
});

interface props {
  firstName: string;
  lastName: string;
  email: string;
  domain: string;
}

const toTitleCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const sendConfirmation = async (user: props) => {
  const htmlBuffer = await fs.readFile(
    path.join(__dirname, "..", "..", "..", "public", "confirmation.html")
  );
  const textBuffer = await fs.readFile(
    path.join(__dirname, "..", "..", "..", "public", "confirmation.txt")
  );
  user.firstName = toTitleCase(user.firstName);
  user.lastName = toTitleCase(user.lastName);
  const htmlContent = getTemplatedString(user, htmlBuffer.toString());
  const textContent = getTemplatedString(user, textBuffer.toString());
  const subject = "Thank you applying, your journey to success begins now!";
  const sentFrom = new Sender(
    "no-reply@dscommunity.in",
    "Data Science Community SRM"
  );

  const recipients = [new Recipient(user.email, user.firstName+" "+ user.lastName)];
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(subject)
    .setHtml(htmlContent)
    .setText(textContent);

  await mailerSend.email.send(emailParams);
};
