import spacy
from textblob import TextBlob

nlp = spacy.load("en_core_web_sm")

def analyze_text(text: str):
    doc = nlp(text)
    tokens = [{"text": token.text, "lemma": token.lemma_, "pos": token.pos_} for token in doc]
    entities = [{"text": ent.text, "label": ent.label_} for ent in doc.ents]
    dependencies = [{"text": token.text, "dep": token.dep_, "head": token.head.text} for token in doc]
    sentiment = TextBlob(text).sentiment

    return {
        "tokens": tokens,
        "entities": entities,
        "dependencies": dependencies,
        "sentiment": {
            "polarity": sentiment.polarity,
            "subjectivity": sentiment.subjectivity
        }
    }
