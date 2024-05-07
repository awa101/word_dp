# 한중일 공통 단어집

## 사용 데이터
[한중일 공통 한자어 어휘집](https://tcvd-asia.com/ko/808-chinese-character04) 한국어 pdf, 일본어 pdf, 중국어 pdf 파일
<br><br>

## 기술 스택
- **Backend**: Django(Django REST framework)
- **Frontend**: React(charkra UI)
- **DB**: Mysql
- **Data Processing**: Pandas
- **Deployment**: Nginx, Docker, Google Cloud Platform(GCP)
<br><br>

## 과정

1. **데이터 정제**: 한국어, 중국어, 일본어 각각의 pdf 파일을 word 파일로 변환, 맞춤법 검사 후 pandas로 단어, 뜻, 예문 분리 및 특수문자, 부호 등 제거 <br><br>
2. **DB 스키마 구성**: 한중일 각각 단어, 뜻, 예문 테이블 구성 <br><br>
3. **백엔드**: DRF 이용하여 list, detail, search 등 API 구성 <br><br>
4. **프론트엔드**: React 사용 컴포넌트 기반 아키텍처 설계 및 chakra ui를 사용한 반응형 UI 구성 <br><br>
6. **통합**: 전체 애플리케이션의 구성 요소(React, Django, MySQL, Nginx)를 Docker 컨테이너로 통합 <br><br>
7. **배포**: Google Cloud Compute Engine 인스턴스 생성 및 서버로 활용 <br><br>
   - 도메인 구입 및 DNS 설정
   - Nginx 정적 파일 서비스 및 백엔드 서버로의 요청 프록시 설정
   - Nginx SSL/TLS 인증서 설치
   - Docker 볼륨 관리
<br><br>


## 배포된 모습
### kr, jp, cn 공통 단어집 List

| ![ko1](https://waterclean101.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf23456a-f793-4e93-a7fe-31a35c7ef36f%2F913baf5e-e707-4a18-9274-4de4187e31da%2FKakaoTalk_20240506_103812514_02.jpg?table=block&id=763c5eb2-f9ab-4f02-9be5-8abc868081ff&spaceId=df23456a-f793-4e93-a7fe-31a35c7ef36f&width=1330&userId=&cache=v2) | ![jp3](https://waterclean101.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf23456a-f793-4e93-a7fe-31a35c7ef36f%2Ff36eed04-f566-411d-bfae-62e726b39f9c%2FKakaoTalk_20240506_103812514.jpg?table=block&id=f8445a8f-ef25-4f56-a46a-0f60fcef7a80&spaceId=df23456a-f793-4e93-a7fe-31a35c7ef36f&width=1330&userId=&cache=v2) | ![cn1](https://waterclean101.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf23456a-f793-4e93-a7fe-31a35c7ef36f%2Fd4dc47c3-c9f0-4a22-a213-c14c0503d130%2FKakaoTalk_20240506_103812514_01.jpg?table=block&id=16ee4c13-5f42-4b50-aa58-486db3e0d270&spaceId=df23456a-f793-4e93-a7fe-31a35c7ef36f&width=1330&userId=&cache=v2) |
|---|---|---|

### kr, jp, cn 공통 단어집 Detail

| ![ko2](https://waterclean101.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf23456a-f793-4e93-a7fe-31a35c7ef36f%2F96f528be-e90d-444e-816e-55b934d39970%2FKakaoTalk_20240506_103812514_06.jpg?table=block&id=1e3e8442-5ee4-432b-a15c-3e99d9cf088e&spaceId=df23456a-f793-4e93-a7fe-31a35c7ef36f&width=1330&userId=&cache=v2) | ![jp2](https://waterclean101.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf23456a-f793-4e93-a7fe-31a35c7ef36f%2Fad848be7-ad78-44c6-bc9d-9cde9008c3cd%2FKakaoTalk_20240506_103812514_04.jpg?table=block&id=98eadfd1-df72-4d2e-8058-ef083d641c84&spaceId=df23456a-f793-4e93-a7fe-31a35c7ef36f&width=1330&userId=&cache=v2) | ![cn2](https://waterclean101.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf23456a-f793-4e93-a7fe-31a35c7ef36f%2Fd73f7934-b401-4ada-aa52-daa53f01724b%2FKakaoTalk_20240506_103812514_05.jpg?table=block&id=9dbf00df-cb17-4c50-a1e1-28c0fa647f8f&spaceId=df23456a-f793-4e93-a7fe-31a35c7ef36f&width=1330&userId=&cache=v2) |
|---|---|---|

### 예문 및 기타 기능

| ![example](https://waterclean101.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf23456a-f793-4e93-a7fe-31a35c7ef36f%2F9ce2db4d-7b11-45b6-885a-d6abc75c08a9%2FKakaoTalk_20240506_103812514_07.jpg?table=block&id=3069eb0e-1df6-4fb5-b607-eb186e78c229&spaceId=df23456a-f793-4e93-a7fe-31a35c7ef36f&width=1330&userId=&cache=v2) | ![kensaku](https://waterclean101.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf23456a-f793-4e93-a7fe-31a35c7ef36f%2F656a7f4e-acbe-4356-8887-980f306bbe87%2FKakaoTalk_20240506_103812514_08.jpg?table=block&id=fd3b3822-459f-4c5f-ae88-34fcab59a939&spaceId=df23456a-f793-4e93-a7fe-31a35c7ef36f&width=1330&userId=&cache=v2) | ![list](https://waterclean101.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf23456a-f793-4e93-a7fe-31a35c7ef36f%2F43302fd4-6a1b-4f23-9b01-1d9eda439f0e%2FKakaoTalk_20240506_103812514_12.jpg?table=block&id=84c30e6b-a8cc-4821-89fa-9954ac8b82fb&spaceId=df23456a-f793-4e93-a7fe-31a35c7ef36f&width=1330&userId=&cache=v2) |
|---|---|---|
