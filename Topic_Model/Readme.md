# 🧠 Topic Modeling with Latent Dirichlet Allocation (LDA)

## 📌 Overview

This project applies **Latent Dirichlet Allocation (LDA)** to uncover hidden themes in a corpus of ~50,000 news articles from various publishers (e.g., New York Times, CNN, Fox News). The main objectives were:

- Preprocessing and cleaning article content
- Training LDA models with different topic numbers
- Evaluating model coherence
- Interpreting topics via keyword extraction
- Visualizing topic distribution using PyLDAvis

---

## 🗂️ Dataset

- **File**: `articles1.csv`
- **Fields used**: Only the `content` column
- **Size**: ~50,000 articles from 2015 to mid-2017
- **Sources**: Reputable media outlets (e.g., NYT, CNN, Fox, Guardian, etc.)

---

## 🔧 Methodology

### 1. **Text Preprocessing**
- Lowercasing
- Tokenization using NLTK
- Removing punctuation and stopwords
- Optional filtering of rare and frequent tokens

### 2. **LDA Model Training**
- Used `gensim`'s `LdaModel`
- Trained models with:
  - 5 topics
  - 8 topics
  - 10 topics
- Evaluated using `CoherenceModel` (`c_v`)

### 3. **Visualization**
- Used `pyLDAvis` for interactive visualization
- Saved visual output as HTML for easy interpretation

---

## 📊 Results

| Num Topics | Coherence Score | Notes |
|------------|------------------|-------|
| 5          | 0.4029           | Topics too broad and overlapping |
| 8          | 0.4851           | Balanced coherence and interpretability |
| 10         | **0.4891**       | Best performance – more specific topics |

---

## 🔍 Topic Interpretation (Example – 10 Topics)

| Topic | Keywords | Interpretation |
|-------|----------|----------------|
| 1 | new, show, film, star | Entertainment & Media |
| 2 | trump, clinton, president | U.S. Elections |
| 3 | cnn, city, water | Local/Environmental News |
| 4 | isis, military, united | International Security |
| ... | ... | ... |

(See full interpretation in `analysis.ipynb`)

---

## 📁 Files Included

- `topic_modeling.ipynb` – Main Jupyter notebook with code and output
- `lda_visualization8.html` – PyLDAvis visualization for 8-topic model
- `README.md` – This file
- `articles1.csv` – Original dataset (not submitted if large)
- Screenshots – Visualization and coherence results (optional)

---

## 🧠 Skills Demonstrated

- Unsupervised learning (LDA)
- Text preprocessing (NLTK, Gensim)
- Model evaluation (Coherence score)
- Visualization (PyLDAvis)
- Interpretation of NLP results


