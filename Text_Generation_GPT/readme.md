# GPT-2 Fine-Tuning for Literary Text Generation

This project fine-tunes the **GPT-2** language model on a custom literary corpus (e.g., *Moby Dick*, *Hamlet*) to generate domain-specific, creative text. GPT-2 is an autoregressive Transformer trained to predict the next word in a sequence, making it ideal for story generation, dialogue creation, and creative writing tasks.

---

## 📖 Overview
- **Goal**: Adapt GPT-2 to generate text in the style of classic literature.
- **Base Model**: `gpt2` from Hugging Face Transformers.
- **Corpus**: Selected works from the [NLTK Gutenberg corpus](https://www.nltk.org/nltk_data/) — *Moby Dick* and *Hamlet*.
- **Training Method**: Full fine-tuning on cleaned and preprocessed text.
- **Evaluation Metrics**: ROUGE, BLEU (optional), METEOR — with METEOR preferred for open-ended creative generation.

---

## 🛠 Steps

1. **Data Collection**
   - Load selected literary works from NLTK Gutenberg.
   - Combine into a single corpus.

2. **Preprocessing**
   - Lowercase text.
   - Remove extra whitespace and non-alphanumeric characters (preserve punctuation).

3. **Tokenization**
   - Use GPT-2 tokenizer with max sequence length of 128.

4. **Fine-Tuning**
   - Train for 8 epochs using `Trainer` API.
   - Batch size: 16.
   - Save model and tokenizer for inference.

5. **Text Generation**
   - Provide prompts (e.g., “Once upon a time”, “The whale was nowhere to be seen”).
   - Generate up to 50 tokens using nucleus sampling (top-p) and top-k filtering.

6. **Evaluation**
   - **ROUGE**: Measures n-gram overlap.
   - **METEOR**: Captures semantic similarity — preferred for creative outputs.
   - **BLEU**: Optional, but less informative for free-form text.

---

## 📊 Results

**Training Loss**  
| Epoch | Loss    |
|-------|--------|
| 1     | 4.4116 |
| 4     | 3.8944 |
| 8     | 3.6837 |

**Evaluation Scores**
- **ROUGE-1**: 0.2063
- **ROUGE-2**: 0.1698
- **ROUGE-L**: 0.2067
- **METEOR**: 0.5046

---

## 🧪 Example Outputs

**Prompt:** `Once upon a time`  
**Output:**  
> Once upon a time, when the white whale's tremendous jaws and teeth should be so closely joined in them with those of other sharks which he then feeds on; it was not till about eight or ten that such unnatural jointing took place. as for

**Prompt:** `To be or not to be`  
**Output:**  
> To be or not to be, in a certain measure, there are two main considerations involved here; both involving the consideration of this matter simultaneously. first: we must remember that all whales generally have their mouths cut into small incisionments...

---

## 🚀 Key Takeaways
- GPT-2 effectively adapts to domain-specific style with fine-tuning.
- METEOR is more suited than ROUGE/BLEU for evaluating creative text.
- The fine-tuned model generates coherent, stylistically consistent outputs.

---

## 📜 References
- [Hugging Face Transformers](https://huggingface.co/docs/transformers/index)
- [NLTK Gutenberg Corpus](https://www.nltk.org/nltk_data/)
- [ROUGE](https://aclanthology.org/W04-1013/)
- [METEOR](https://aclanthology.org/W05-0909/)

---
