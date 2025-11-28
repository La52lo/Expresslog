document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    
    if (res.ok) {
      document.getElementById('message').textContent = 'Account created! Redirecting...';
      setTimeout(() => window.location.href = '/login.html', 1500);
    } else {
      document.getElementById('message').textContent = data.error;
    }

  } catch (err) {
    console.error(err);
    document.getElementById('message').textContent = 'Network error';
  }
});
