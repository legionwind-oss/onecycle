#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-4173}"
HOST="${HOST:-0.0.0.0}"

if ! command -v python3 >/dev/null 2>&1; then
  echo "[ERROR] python3가 필요합니다. python3 설치 후 다시 실행하세요."
  exit 1
fi

LOCAL_IP="$(hostname -I 2>/dev/null | awk '{print $1}')"

cat <<MSG
[INFO] 정적 서버를 시작합니다.
[INFO] bind host: ${HOST}
[INFO] port: ${PORT}
[INFO] 같은 머신 브라우저: http://127.0.0.1:${PORT}
MSG

if [[ -n "${LOCAL_IP}" ]]; then
  echo "[INFO] 동일 네트워크 다른 기기: http://${LOCAL_IP}:${PORT}"
fi

cat <<MSG
[INFO] 접속이 안 되면 아래를 확인하세요.
       1) 이 프로세스가 실행 중인지
       2) 방화벽/보안SW가 ${PORT} 포트를 차단하는지
       3) 컨테이너/원격 환경이면 포트 포워딩이 열려 있는지
       4) 필요 시 HOST=127.0.0.1 ./run-local.sh ${PORT} 로 실행
[INFO] 종료: Ctrl + C
MSG

python3 -m http.server "${PORT}" --bind "${HOST}"
