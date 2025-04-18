import axios from 'axios';
import { AnalyzeRequest, AnalyzeResponse } from '../types';

export const analyzeText = async (
  data: AnalyzeRequest,
  model: string = 'en_core_web_sm'
): Promise<AnalyzeResponse> => {
  const response = await axios.post(`http://localhost:8000/api/analyze`, {
    ...data,
    model,
  });
  return response.data;
};
