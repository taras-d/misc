from smtplib import SMTP
from email.message import Message

def send_mail(from_addr, to_addr, subject, body):

    msg = Message()
    msg['Subject'] = subject
    msg['From'] = from_addr
    msg['To'] = to_addr if isinstance(to_addr, str) else ', '.join(to_addr)
    msg.add_header('Content-Type', 'text/html')
    msg.set_payload(body)

    smtp = SMTP('localhost')
    smtp.sendmail(from_addr, to_addr, msg.as_string())
    smtp.quit()
