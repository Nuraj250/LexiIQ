# 🧠 Smart Text Analyzer

Smart Text Analyzer is an AI-powered NLP web app that processes natural language using advanced techniques from spaCy and TextBlob. It supports multilingual analysis, live typing, token visualization, sentiment charting, entity filtering, and export to JSON/PDF all packed into a modern React + FastAPI fullstack project.

---

## 🚀 Features

✅ Live text analysis as you type  
✅ Named entity recognition with type filters  
✅ Lemmatization and POS tagging  
✅ Interactive token tooltips (Konva.js)  
✅ Sentiment visualization chart (polarity/subjectivity)  
✅ Upload `.txt` file for bulk analysis  
✅ Switch between spaCy language models  
✅ Export results to PDF or JSON  
✅ View history of previous analyses (stored locally)

---

## 🛠️ Tech Stack

| Frontend     | Backend     |
|--------------|-------------|
| React + TS   | FastAPI     |
| Bootstrap    | spaCy       |
| Konva.js     | TextBlob    |
| jsPDF        | Pydantic    |

---

## 📦 Project Structure

```
smart-text-analyzer/
├── frontend/        # React app (Bootstrap + Konva)
└── backend/         # FastAPI (spaCy + TextBlob)
```

---

## ⚙️ Setup Instructions

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/Nuraj250/smart-text-analyzer.git
cd smart-text-analyzer
```

---

### ✅ 2. Start the Backend (FastAPI)

```bash
cd backend
python -m venv venv
# Activate venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
python -m spacy download en_core_web_sm
python -m textblob.download_corpora

uvicorn app.main:app --reload
```

🔗 Backend runs at: [http://127.0.0.1:8000](http://127.0.0.1:8000)  
🧪 API docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### ✅ 3. Start the Frontend (React)

```bash
cd ../frontend
npm install
npm start
```

🔗 Frontend runs at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 How to Use

1. 📝 Start typing text into the textarea  
2. 🧠 Analysis happens automatically after a short pause  
3. 🎯 Use filters to view specific entity types  
4. 📈 Check sentiment via emoji & Konva bar chart  
5. 🔍 Hover over tokens for POS & lemma info  
6. 📂 Optionally upload a `.txt` file  
7. 🌐 Choose another language model (e.g. multilingual)  
8. 💾 Export results to PDF or JSON  
9. 📚 Browse or restore from past analysis history

---

## 📤 Exported Output

### ✅ JSON Example
```json
{
  "tokens": [
    { "text": "OpenAI", "lemma": "OpenAI", "pos": "PROPN" },
    ...
  ],
  "entities": [
    { "text": "OpenAI", "label": "ORG" }
  ],
  "dependencies": [
    { "text": "OpenAI", "dep": "nsubj", "head": "is" }
  ],
  "sentiment": {
    "polarity": 0.5,
    "subjectivity": 0.6
  }
}
```

---

## 📌 To-Do / Possible Enhancements

- Docker fullstack deployment
- User login / saved workspaces
- Dark mode & accessibility features
- Shareable result links

---

## 📄 License

MIT © 2025 — Nuraj