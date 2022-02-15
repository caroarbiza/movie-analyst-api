FROM ideavate/amazonlinux-node:12

WORKDIR /home

RUN yum -y update \
&& yum install -y git && git clone https://github.com/caroarbiza/movie-analyst-api \
&& cd movie-analyst-api \
&& npm install -y \
ejs \
express \
util \
mysql 


EXPOSE 3036

COPY ./script.sh /home/movie-analyst-api/script.sh

WORKDIR /home/movie-analyst-api/

ENTRYPOINT ["bash","script.sh"]
