# IMDB Sentiment Analysis — DistilBERT + LoRA

This project fine-tunes the **DistilBERT** (`distilbert-base-uncased`) Transformer model for **binary sentiment classification** on the [IMDB Movie Reviews dataset](http://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews). The dataset contains 50,000 reviews equally split between positive and negative sentiments. We apply **LoRA** (Low-Rank Adaptation) for **parameter-efficient training**, enabling us to adapt a large language model by updating only a small subset (~1%) of its parameters, greatly reducing computational cost and memory requirements.

## Overview
- **Task**: Classify IMDB movie reviews as **positive** or **negative** sentiment.
- **Data**: 50k reviews (sampled 10k for faster training and experimentation).
- **Approach**: Use LoRA to inject trainable rank-decomposition matrices into attention layers, fine-tuning with far fewer parameters than traditional methods.
- **Frameworks**: [Hugging Face Transformers](https://huggingface.co/docs/transformers), [PEFT](https://github.com/huggingface/peft), [Datasets](https://huggingface.co/docs/datasets).

## Methodology
1. **Data Preparation**: Load and preprocess text reviews, tokenize with DistilBERT tokenizer, and split into training and validation sets.
2. **Model Setup**: Load DistilBERT for sequence classification with 2 output labels.
3. **LoRA Integration**: Apply LoRA configuration targeting `q_lin` and `v_lin` attention projection layers.
4. **Training**: Fine-tune for 3 epochs with batch size 16, evaluating at the end of each epoch.
5. **Evaluation**: Use accuracy and weighted F1-score as primary metrics.
6. **Inference**: Implement a prediction function to classify custom input text.

## Results
- **Accuracy**: 88.6%
- **F1 Score**: 88.6%
- **Evaluation Loss**: 0.2810  
The model demonstrates strong performance while training only ~739k parameters out of 67M total.

## Example
```python
Text: "i dont any word ."
Prediction: negative
Probabilities: [0.75, 0.25]
