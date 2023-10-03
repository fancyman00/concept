from service.controller import EmailController
from service.model import Message, Order
from service.tools.decorators import error_wrapper


class EmailApi:
    def __init__(self, app, controller: EmailController):
        self.app = app
        self.service = controller

        @self.app.put("/api/send")
        @error_wrapper
        def send_message_mail(data: Message):
            controller.send_message_email(data)

        @self.app.put("/api/order")
        @error_wrapper
        def send_order_mail(data: Order):
            controller.send_order_email(data)
