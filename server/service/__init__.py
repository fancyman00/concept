from .api import EmailApi
from .controller import EmailController
from .smtp.email import EmailService


class Email:
    def __init__(self, app, bot_email, password, manager_email):
        self.service = EmailService(bot_email, password)
        self.controller = EmailController(self.service, bot_email, manager_email)
        self.api = EmailApi(app, self.controller)
