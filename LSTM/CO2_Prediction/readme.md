CO₂ Time Series Forecasting with LSTM
This project demonstrates forecasting future CO₂ concentration levels using a Long Short-Term Memory (LSTM) neural network in PyTorch.

It includes data normalization, sequence generation for supervised learning, model training, validation, and visualization.

📌 Features
Load and visualize raw CO₂ time series.

Normalize data to [-1, 1].

Create input-output sequences for prediction.

Train/validation/test split.

PyTorch Dataset & DataLoader integration.

Multi-layer LSTM model.

Training with MSE loss.

TensorBoard logging.

Plot training/validation loss over epochs.

🗂️ Project Structure
css
Copy
Edit
.
├── data/
│   └── co2.csv
├── models/
│   └── lstm_model.pt (optional, saved model)
├── runs/
│   └── co2_experiment/ (TensorBoard logs)
├── src/
│   └── main.py
└── README.md
📈 Example Plot
Example of the loss curve:


🧪 Setup Instructions
1️⃣ Install Dependencies
bash
Copy
Edit
pip install numpy pandas matplotlib scikit-learn torch tensorboard
2️⃣ Prepare Data
Place your CO₂ time series CSV in the data/ folder.

Example CSV format:

time	co2
1958-03-01	315.7
1958-04-01	317.6
...	...

🏗️ Usage
Run training:

bash
Copy
Edit
python src/main.py
Monitor TensorBoard logs:

bash
Copy
Edit
tensorboard --logdir=runs
⚙️ Main Parameters
You can adjust these in the script:

Parameter	Description	Example
INPUT_LEN	Input sequence length	12
OUTPUT_LEN	Output prediction length	1
HIDDEN_SIZE	LSTM hidden units	100
NUM_LAYERS	Number of LSTM layers	2
BATCH_SIZE	Training batch size	64
EPOCHS	Number of training epochs	20
DEVICE	'cuda' or 'cpu'	'cuda'

🔎 What Does It Do?
✔ Loads and visualizes CO₂ time series.
✔ Normalizes data.
✔ Converts it to sliding window sequences.
✔ Splits data into train/val/test sets.
✔ Defines and trains an LSTM forecasting model.
✔ Logs training and validation loss to TensorBoard.
✔ Plots loss curves.

🤖 Model Architecture
PyTorch LSTM

Input: past CO₂ readings

Output: predicted future CO₂ readings

Layers:

LSTM (multi-layer)

Linear decoder


