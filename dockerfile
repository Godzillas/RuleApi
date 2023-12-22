# 使用maven官方镜像作为构建环境
FROM maven:3.6.3-jdk-8 AS build

# 将项目源码复制到容器内
COPY . /usr/src/app

# 设置工作目录
WORKDIR /usr/src/app

# 执行maven构建命令打包Java应用
RUN mvn clean package

# 使用OpenJDK 8镜像作为最终运行环境
FROM openjdk:8-jdk-alpine

# 设置工作目录
WORKDIR /opt

# 从构建阶段复制打包好的jar文件到/opt目录
COPY --from=build /usr/src/app/target/*.jar app.jar

# 暴露端口
EXPOSE 8080

# 设置容器启动时执行的命令
ENTRYPOINT ["java", "-jar", "app.jar"]
