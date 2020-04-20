FROM node:latest

CMD sudo apt update && apt install git -y
CMD git clone https://github.com/Seb6277/form_project
CMD cd form_project && npm install

EXPOSE 5000

ENTRYPOINT cd form_project && npm start
