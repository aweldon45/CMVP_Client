# build static files
FROM node:8-alpine as builder

WORKDIR /home/node/Collabeteria_MVP/CMVP_Client

ADD . .

RUN npm install && npm run build

# build nginx image to serve static files from build

FROM nginx

# remove the default static file drive
RUN rm -rf /usr/share/nginx/html*

# from builder copy in new directory of static files
COPY --from=builder /home/node/Collabeteria_MVP/CMVP_Client /usr/share/nginx/html
COPY --from=builder /home/node/Collabeteria_MVP/CMVP_Client/nginx.conf /etc/nginx/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
