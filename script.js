// complete the given function

function palindrome(str) {
  // Lowercase karo aur non-alphanumeric characters remove karo
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return reversed === cleaned;
}

