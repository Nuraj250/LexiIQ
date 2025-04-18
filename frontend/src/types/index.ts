export interface AnalyzeRequest {
    text: string;
    model?: string; // added optional model
  }
  
  export interface Token {
    text: string;
    lemma: string;
    pos: string;
  }
  
  export interface Entity {
    text: string;
    label: string;
  }
  
  export interface Dependency {
    text: string;
    dep: string;
    head: string;
  }
  
  export interface Sentiment {
    polarity: number;
    subjectivity: number;
  }
  
  export interface AnalyzeResponse {
    tokens: Token[];
    entities: Entity[];
    dependencies: Dependency[];
    sentiment: Sentiment;
  }
  