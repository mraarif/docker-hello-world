FROM python:3.8.6-slim-buster

COPY requirements.txt /app/requirements.txt

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

EXPOSE 80

ENTRYPOINT ["python"]

CMD ["app.py"]