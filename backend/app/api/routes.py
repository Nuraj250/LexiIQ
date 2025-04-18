from fastapi import APIRouter
from pydantic import BaseModel
from app.core.nlp_engine import analyze_text

router = APIRouter()

class AnalyzeRequest(BaseModel):
    text: str

@router.post("/analyze")
async def analyze(request: AnalyzeRequest):
    result = analyze_text(request.text)
    return result
