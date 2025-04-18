from fastapi import APIRouter
from pydantic import BaseModel
from app.core.nlp_engine import analyze_text

router = APIRouter()

class AnalyzeRequest(BaseModel):
    text: str
    model: str = "en_core_web_sm"


@router.post("/analyze")
async def analyze(request: AnalyzeRequest):
    return analyze_text(request.text, model=request.model)

