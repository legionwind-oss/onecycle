# ONECYCLE SIEM Prototype

이 저장소는 SIEM 대시보드 UI 프로토타입입니다.

## 핵심 답변

- Python 설치만으로 실행은 가능합니다.
- 그래도 접속이 안 되는 경우는 대부분 **포트/바인딩/원격환경(포워딩)** 문제입니다.

## 가장 쉬운 실행

```bash
./run-local.sh
```

- 기본: `HOST=0.0.0.0`, `PORT=4173`
- 같은 머신 브라우저 접속: `http://127.0.0.1:4173`

## 접속이 안 될 때 바로 해볼 것

### 1) localhost 전용 바인딩으로 실행

```bash
HOST=127.0.0.1 ./run-local.sh 4173
```

### 2) 다른 포트로 실행

```bash
./run-local.sh 5000
```

### 3) 포트 점유 확인

```bash
ss -lntp | rg ':4173|:5000'
```

## npm/Vite 방식 (선택)

```bash
npm install
npm run dev
```

- 기본 접속 주소: `http://localhost:4173`
- 환경 정책에 따라 `npm install` 실패 시 `./run-local.sh` 사용

## 원격/컨테이너 환경 주의

- 이 경우 `localhost`는 "내 PC"가 아니라 "원격 실행 환경"일 수 있습니다.
- 브라우저에서 보려면 포트 포워딩(4173)을 열어야 합니다.
