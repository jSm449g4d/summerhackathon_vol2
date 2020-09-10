
FROM python:3.8

# Init
ENV APP /var/www
WORKDIR $APP
COPY . .
RUN apt update -q;apt upgrade -yq

# Javascript
WORKDIR $APP/html/static
RUN apt install npm -yq
RUN npm install -g npm
RUN npm install --save jquery@3.5.1 popper.js@1.16.1 bootstrap && \
    npm install @fortawesome/fontawesome-free lazysizes

# Python3
WORKDIR $APP
RUN apt install gcc python3-pip -yq
RUN pip3 install -U pip
RUN pip3 install -U -r requirements.txt

# Hosting
WORKDIR $APP
CMD bash -c "waitress-serve --host=0.0.0.0 --port=8080 wsgi:app"
