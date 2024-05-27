FROM amazoncorretto:21-alpine-jdk

COPY target2/demo-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8888

ENTRYPOINT ["java","-jar","/app.jar"]