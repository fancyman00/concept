import smtplib


class EmailService:
    def __init__(self, login, password):
        self.server = smtplib.SMTP('smtp.gmail.com', 587)
        self.server.ehlo()
        self.server.starttls()
        self.server.login(login, password)

    def send_email(self, sender, receiver, content):
        self.server.sendmail(sender, receiver, content)

