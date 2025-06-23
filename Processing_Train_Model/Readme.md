# 🧠 Text Classification using Logistic Regression, SVM, and Decision Tree

## 📚 Overview

This notebook demonstrates a full pipeline for supervised text classification using a labeled and unlabeled dataset. It includes steps to load the data, preprocess it, vectorize the text, train multiple classifiers, and evaluate their performance. The models used include Logistic Regression, Support Vector Machine (SVM), and Decision Tree.

---

## 🗂️ Structure

The notebook is divided into the following main sections:

1. **Load Data**  
   - Load labeled and unlabeled datasets.
   - Each sentence is treated as a document for processing.

2. **Preprocessing**
   - Remove section headers like `### abstract ###`
   - Remove stopwords and punctuation
   - Tokenization and cleaning of both labeled and unlabeled text

3. **Vectorization**
   - Convert the cleaned labeled text into numeric format using `TfidfVectorizer`.

4. **Logistic Regression**
   - Train a logistic regression classifier using the labeled data
   - Evaluate the model with accuracy, precision, recall, and F1-score

5. **Other Classifiers**
   - Train and evaluate a Support Vector Machine (SVM)
   - Train and evaluate a Decision Tree classifier

6. **Evaluation**
   - Compare model performances
   - Print confusion matrices and classification reports

7. **Summary**
   - Recap of model accuracy and findings

---

## ✅ Features

- Full NLP pipeline: loading, cleaning, vectorizing, modeling
- Multiple classifiers compared
- Clean modular structure
- Designed for educational and reproducible experimentation

---


