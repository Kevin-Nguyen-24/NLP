// Frontend talking to Flask (which proxies to Ollama)
const MODEL = "gpt-oss:20b";

const $msg = document.getElementById('msg');
const $send = document.getElementById('sendBtn');
const $resp = document.getElementById('respBox');
const $status = document.getElementById('status');

async function sendMessage() {
  const prompt = ($msg.value || '').trim();
  if (!prompt) { $status.textContent = 'Please enter a message.'; return; }

  $status.textContent = 'Sending...';
  $send.disabled = true; $resp.textContent = '';

  try {
    const r = await fetch('/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: prompt, model: MODEL })
    });

    const text = await r.text();
    let data; try { data = JSON.parse(text); } catch { data = { raw: text }; }

    if (!r.ok) {
      $status.textContent = `Error • ${r.status}`;
      $resp.textContent = JSON.stringify(data, null, 2);
      return;
    }

    const reply = data.response || data.output || data.text || '(no content)';
    $status.textContent = 'Done';
    $resp.textContent = reply;
  } catch (e) {
    $status.textContent = 'Network error';
    $resp.textContent = String(e?.message || e);
  } finally {
    $send.disabled = false;
  }
}

$send.addEventListener('click', sendMessage);
$msg.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) sendMessage();
});
