import { Auth, google } from 'googleapis';
import nodemailer, { Transporter } from 'nodemailer';
import env from './app.config';

const { MAIL_SEND_CLIENT_ID, MAIL_SEND_CLIENT_SECRET, MAIL_REFRESH_TOKEN, EMAIL_ADDRESS } = env;

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
const MAIL_SUBJECT = 'RS Code';

const sendEmail = async (email: string, url: string, txt: string): Promise<string> => {
  const oauth2Client: Auth.OAuth2Client = new google.auth.OAuth2(
    MAIL_SEND_CLIENT_ID,
    MAIL_SEND_CLIENT_SECRET,
    OAUTH_PLAYGROUND
  );
  oauth2Client.setCredentials({ refresh_token: MAIL_REFRESH_TOKEN });

  const accessToken = await oauth2Client.getAccessToken();
  const nodeConfig: any = {
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: EMAIL_ADDRESS,
      clientId: MAIL_SEND_CLIENT_ID,
      clientSecret: MAIL_SEND_CLIENT_SECRET,
      refreshToken: MAIL_REFRESH_TOKEN,
      accessToken,
    },
  };
  const transporter: Transporter = nodemailer.createTransport(nodeConfig);

  const mailOptions = {
    from: EMAIL_ADDRESS,
    to: email,
    subject: MAIL_SUBJECT,
    html: `
      <div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
        <h2 style="text-align: center; text-transform: uppercase; color: teal;">Welcome to the RS Code.</h2>
        <p>Congratulations! You're almost set to start using RS✮SHOP. Just click the button below to validate your email address.</p>
        <a href=${url} style="background-color: crimson; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>
        <p>If the button doesn't work for any reason, you can also click on the link below:</p>
        <div style="margin-top: 10px;">${url}</div>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return `Message sent: ${info.messageId}`;
  } catch (err: any) {
    return err.message;
  }
};

export default sendEmail;
