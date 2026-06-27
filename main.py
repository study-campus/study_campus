from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Study Campus API Server")

# 웹사이트(프론트엔드)와 서버(백엔드) 주소가 다를 때 발생하는 CORS 차단 에러 방지 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://study-campus.github.io"], # 깃허브 배포 주소 허용
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

@app.get("/api/v1/user/classroom")
def get_classroom_data():
    """웹/앱에서 내 강의실을 눌렀을 때 전달할 데이터"""
    return {
        "status": "success",
        "user_name": "수험생",
        "courses": [
            {"subject": "국어", "teacher": "김스터디", "progress": 85},
            {"subject": "수학", "teacher": "박수학", "progress": 42}
        ]
    }