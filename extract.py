import re

with open("vercel.js", "r", encoding="utf-8") as f:
    content = f.read()

# Extract all string literals
strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', content)

# Filter for likely content strings
content_strings = [s for s in strings if len(s) > 20 and not s.startswith("http") and not s.startswith("assets/") and "function" not in s]

print("POSSIBLE CONTENT:")
for s in content_strings[:100]:
    print(s)
