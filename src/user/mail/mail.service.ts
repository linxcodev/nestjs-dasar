export class MailService {
  send(){
    console.info('Send Email');
  }
}

// value provider
// contoh libary ini punya orang lain, mau diinject
export const mailservice = new MailService();
